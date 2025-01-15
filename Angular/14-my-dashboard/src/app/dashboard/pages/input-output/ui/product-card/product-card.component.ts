import { ChangeDetectionStrategy, Component, effect, input, output, Output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  // @Input({
  //   required: true
  // })
  // public product: Product;

  public product = input.required<Product>();

  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public logginEffect = effect( () => {
    console.log(this.product().name);
  });

}
