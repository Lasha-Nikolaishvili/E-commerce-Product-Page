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
    cartPopup.classList.toggle('d-none');
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


decSpan.addEventListener('mouseenter', ()=> {
    decUse.style.fill = 'hsl(26, 100%, 65%)';
})

decSpan.addEventListener('mouseleave', ()=> {
    decUse.style.fill = '';
})

decSpan.addEventListener('click', ()=> {
    if(parseInt(quantity.innerHTML) > 0) quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
})

// Increment span control
const incSpan = document.querySelector('.inc-span');
const incUse = document.querySelector('.inc-use');

incSpan.addEventListener('mouseenter', ()=> {
    incUse.style.fill = 'hsl(26, 100%, 65%)';
})

incSpan.addEventListener('mouseleave', ()=> {
    incUse.style.fill = '';
})

incSpan.addEventListener('click', ()=> {
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
})

// Cart button control
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const checkoutQty =  document.querySelector('.checkout-qty');
const totalPrc =  document.querySelector('.total-prc');
const selectedProducts = document.querySelector('.selected-products');
const emptyMsg = document.querySelector('.empty-msg');
const qtyOnCartIcon = document.querySelector('.qty-on-cart-icon');
addToCartBtn.addEventListener('click', () => {
    if(parseInt(quantity.innerHTML) != 0) { 
        checkoutQty.innerHTML = quantity.innerHTML;
        qtyOnCartIcon.innerHTML = quantity.innerHTML;
        totalPrc.innerHTML = `$${125 * parseInt(checkoutQty.innerHTML)}.00`;
        selectedProducts.classList.remove('d-none');
        emptyMsg.classList.add('d-none');
    }
});

// Checkout/delete button control
const checkoutBtn = document.querySelector('.checkout-btn');
const deleteBtn = document.querySelector('.del-btn');
deleteBtn.addEventListener('click', completeOrder);
checkoutBtn.addEventListener('click', completeOrder);

function completeOrder() {
    quantity.innerHTML = 0;
    checkoutQty.innerHTML = 0;
    qtyOnCartIcon.innerHTML = '';
    emptyMsg.classList.remove('d-none');
    selectedProducts.classList.add('d-none');
}

// Product image control
const mainImg = document.querySelector('.main-img');
const botImgs = document.querySelectorAll('.bot-img');
botImgs[0].parentElement.style.border = '2px solid hsl(26, 100%, 55%)';

const prevBtnHidden = document.querySelector('.prev-cont-hidden');
const nextBtnHidden = document.querySelector('.next-cont-hidden');
selectedImgIndex = 0;

prevBtnHidden.addEventListener('click', () => {
    if(selectedImgIndex <= 0) selectedImgIndex = modalBotImgs.length;
    selectedImgIndex--;
    selectImg(selectedImgIndex);
});

nextBtnHidden.addEventListener('click', () => {
    selectedImgIndex++;
    if(selectedImgIndex >= modalBotImgs.length) selectedImgIndex = 0;
    selectImg(selectedImgIndex);
});

for(let i=0; i<botImgs.length; i++) {
    botImgs[i].addEventListener('click', () => {
        selectImg(i);
    })
}

function selectImg(index) {
    mainImg.src = `./images/image-product-${index+1}.jpg`;
    for(let j=0; j<botImgs.length; j++) {
        if(botImgs[j].classList.contains('selected')) botImgs[j].classList.remove('selected');
        botImgs[j].parentElement.style.border = '';
    }
    botImgs[index].classList.add('selected');
    botImgs[index].parentElement.style.border = '2px solid hsl(26, 100%, 55%)';
    selectedImgIndex = index;
}

// Modal product image control
const modalMainImg = document.querySelector('.modal-main-img');
const modalBotImgs = document.querySelectorAll('.modal-bot-img');
modalBotImgs[0].parentElement.style.border = '2px solid hsl(26, 100%, 55%)';
let selectedModalImgIndex = 0;

for(let i=0; i<modalBotImgs.length; i++) {
    modalBotImgs[i].addEventListener('click', () => {
        selectModalImg(i);
    })
}

// next/prev btn contol
const prevBtn = document.querySelector('.prev-cont');
const nextBtn = document.querySelector('.next-cont');

prevBtn.addEventListener('click', () => {
    if(selectedModalImgIndex <= 0) selectedModalImgIndex = modalBotImgs.length;
    selectedModalImgIndex--;
    selectModalImg(selectedModalImgIndex);
});

nextBtn.addEventListener('click', () => {
    selectedModalImgIndex++;
    if(selectedModalImgIndex >= modalBotImgs.length) selectedModalImgIndex = 0;
    selectModalImg(selectedModalImgIndex);
});

function selectModalImg(index) {
    modalMainImg.src = `./images/image-product-${index+1}.jpg`;
    for(let j=0; j<modalBotImgs.length; j++) {
        if(modalBotImgs[j].classList.contains('selected')) modalBotImgs[j].classList.remove('selected');
        modalBotImgs[j].parentElement.style.border = '';
    }
    modalBotImgs[index].classList.add('selected');
    modalBotImgs[index].parentElement.style.border = '2px solid hsl(26, 100%, 55%)';
    selectedModalImgIndex = index;
}