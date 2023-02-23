// Cart Icon Control
const cartIcon = document.querySelector('.cart-icon');
const cartIconPath = document.querySelector('.cart-icon-path');
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
        cartIconIsClicked = true
    }
})
// Cart Icon Control