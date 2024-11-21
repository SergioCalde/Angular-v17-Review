import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { filter, switchMap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: ``
})
export class NewHeroPageComponent implements OnInit{

  heroForm = new FormGroup({
    id:               new FormControl(''),
    superhero:        new FormControl('', { nonNullable: true, validators: [ Validators.required ] } ),
    publisher:        new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
  });

  publishers = [
    { id: 'DC Comics', viewValue: 'DC - Comics' },
    { id: 'Marvel Comics', viewValue: 'Marvel - Comics' },
  ]

  constructor( 
              private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackbnar: MatSnackBar,
              private dialog: MatDialog
            ) { }

  ngOnInit(): void {
    
    if ( !this.router.url.includes( 'edit' ) ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById(id) ),
      ).subscribe( hero => {

        if( !hero ) return this.router.navigateByUrl('/');

        this.heroForm.reset( hero );
        return;
      });
  
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero
  }

  onSubmit(): void {

    if( !this.heroForm.valid ) return;
    
    if ( this.currentHero.id ) {
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          this.showSnackbar( `${ hero.superhero } was updated!` );
        });

        return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {

        this.router.navigate(['heroes/edit', hero.id]);
        this.showSnackbar( `${ hero.superhero } was created!` );
      });
    
  }

  onDeleteHero() {
    if( !this.currentHero.id ) throw Error('Hero id is required');

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( ( result : boolean ) => result ),
        switchMap( () => this.heroesService.deleteHeroById( this.currentHero.id )),
        filter( ( wasDeleted : boolean ) => wasDeleted ),
      )
      .subscribe( () => {
        this.router.navigate(['/heroes']);
      });

    // dialogRef.afterClosed().subscribe(result => {
    //   if( !result ) return;
      
    //   this.heroesService.deleteHeroById( this.currentHero.id )
    //     .subscribe( wasDeleted => {
    //       if( wasDeleted ) this.router.navigate(['/heroes'])
    //     })
    // });

  }

  showSnackbar( message: string ): void {
    this.snackbnar.open( message, 'done', {
      duration: 2500,
    } );
  }
}
