import { Product, taxCalculation } from './05-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'IPad',
        price:250
    }
];

const tax = 0.15;

const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax
});

console.log('Total: ', total);
console.log('Tax: ', taxTotal);