import {products} from './product.js';
import {priceFormat} from './utils.js';

export function displayProducts(){
  let productHTML = "";
   products.forEach((product)=>{
    productHTML += `
   <div class="product-div">
    <button class="plus">
    +
  </button>
    <img src=${product.image} class="product-img">
    <p class="product-name">${product.name}</p>
    <p class="product-price">$${priceFormat(product.price)}</p>
  </div>
  `
   })
   document.querySelector('.products-div')
    .innerHTML = productHTML;
}

