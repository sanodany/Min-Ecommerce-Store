import {products} from './product.js';
import {priceFormat} from './utils.js';
import {cart,addToCart} from "./cart.js";



function updateCartQuantity(){
   let cartQuantity = 0;
   cart.forEach((cartItem)=>{
     cartQuantity += cartItem.quantity;
   })

   document.querySelector('.cartNbrDisplay')
    .innerHTML = `cart ${cartQuantity}`;
}

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
       addToCart(productId);
       updateCartQuantity();
    })
   })

  

   

