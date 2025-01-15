import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent implements OnDestroy{
  
  public products = signal<Product[]>([
    { id: 1, name: 'Producto 1', quantity: 0 },
    { id: 2, name: 'Producto 2', quantity: 0 },
    { id: 3, name: 'Producto 3', quantity: 0 },
    { id: 4, name: 'Producto 4', quantity: 0 },
  ])
  
  private intervalSubscription = interval(1000).pipe(
    tap( () => {
      this.products.update( (products) => [
        ...products,
        { id: products.length + 1, name: 'Producto ' + products.length, quantity: 0 }
      ]);
    }),
    take(5)
  ).subscribe();
  
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  public updateProduct( product: Product, quantity: number ) {
    this.products.update( (products) => 
      products.map( (p) => 
        p.id === product.id ? { ...p, quantity: quantity } : p
      )
    );
  }

}
