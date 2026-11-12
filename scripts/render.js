import {products} from './product.js';
import {priceFormat} from './utils.js';
import {cart} from "./cart.js";

export function displayProducts(){
  let productHTML = "";
   products.forEach((product)=>{
    productHTML += `
   <div class="product-div">
    <button class="plus addToCart" data-product-id="${product.id}">
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

  document.querySelectorAll('.addToCart')
   .forEach((button)=>{
    button.addEventListener('click',()=>{
       const productId = button.dataset.productId;
       let matchingItem;
       cart.forEach((item)=>{
        if(productId === item.productId){
          matchingItem = item
        }
       })

       if(matchingItem){
        matchingItem.quantity += 1;
       } else {
        cart.push({
        productId : productId,
        quantity : 1
       })
       }
    })
   })

   

