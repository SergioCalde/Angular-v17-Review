import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild( 'txtTagInput' )
  tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifService: GifsService ){}

  // searchTag( newTag: string ){
  searchTag( ){

    const newTag = this.tagInput.nativeElement.value;

    this.gifService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';
  }

}
