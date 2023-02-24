// Cart Icon Control
const cartIcon = document.querySelector('.cart-icon');
const cartIconPath = document.querySelector('.cart-icon-path');
const cartPopup = document.querySelector('.cart-popup');
let cartIconIsClicked = false;
cartIcon.addEventListener('mouseenter', ()=> {
    cartIconPath.style.fill = 'hsl(0, 0%, 0%)';
})

cartIcon.addEventListener('mouseleave', ()=> {
    (cartIconIsClicked) ? cartIconPath.style.fill = 'hsl(0, 0%, 0%)' : cartIconPath.style.fill = 'hsl(219, 9%, 45%)';
})

cartIcon.addEventListener('click', ()=> {
    if (cartIconIsClicked) {
        cartIconPath.style.fill = 'hsl(219, 9%, 45%)';
        cartIconIsClicked = false; 
    } else {
        cartIconPath.style.fill = 'hsl(0, 0%, 0%)';
        cartIconIsClicked = true;
    }

    cartPopup.classList.toggle('active');
})

// Quantity control
const quantity = document.querySelector('.quantity');
// Decrement span control
const decSpan = document.querySelector('.dec-span');
const decUse = document.querySelector('.dec-use');
// let decSpanIsClicked = false;


decSpan.addEventListener('mouseenter', ()=> {
    decUse.style.fill = 'hsl(26, 100%, 65%)';
})

decSpan.addEventListener('mouseleave', ()=> {
    // (decSpanIsClicked) ? decUse.style.fill = 'hsl(26, 100%, 65%)' : decUse.style.fill = '';
    decUse.style.fill = '';
})

decSpan.addEventListener('click', ()=> {
    if(parseInt(quantity.innerHTML) > 0) quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
    // if (decSpanIsClicked) {
    //     decUse.style.fill = '';
    //     decSpanIsClicked = false; 
    // } else {
    //     decUse.style.fill = 'hsl(26, 100%, 65%)';
    //     decSpanIsClicked = true;
    // }
})

// Increment span control
const incSpan = document.querySelector('.inc-span');
const incUse = document.querySelector('.inc-use');
// let incSpanIsClicked = false;

incSpan.addEventListener('mouseenter', ()=> {
    incUse.style.fill = 'hsl(26, 100%, 65%)';
})

incSpan.addEventListener('mouseleave', ()=> {
    // (incSpanIsClicked) ? incUse.style.fill = 'hsl(26, 100%, 65%)' : incUse.style.fill = '';
    incUse.style.fill = '';
})

incSpan.addEventListener('click', ()=> {
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
    // if (incSpanIsClicked) {
    //     incUse.style.fill = '';
    //     incSpanIsClicked = false;
    // } else {
    //     incUse.style.fill = 'hsl(26, 100%, 65%)';
    //     incSpanIsClicked = true;
    // }
})