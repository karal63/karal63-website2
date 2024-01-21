import { cart } from "../data/cart.js";

const plusButton = document.querySelector(".js-plus");
const minusButton = document.querySelector(".js-minus");
const quantitySelector = document.querySelector(".js-quantity");
let quantityNumber;

plusButton.addEventListener("click", () => {
  quantityNumber = parseInt(quantitySelector.value);
  if (isNaN(quantityNumber) || quantityNumber === "" || quantityNumber < 1) {
    quantityNumber = 0;
  }
  quantityNumber += 1;
  if (quantityNumber > 1) {
    minusButton.classList.add("more-than-one");
  }
  quantitySelector.value = quantityNumber; // Update the value property, not innerHTML
});

minusButton.addEventListener("click", () => {
  quantityNumber = parseInt(quantitySelector.value);
  if (quantityNumber === 1 || isNaN(quantityNumber) || quantityNumber < 1) {
    quantityNumber = 2;
  }
  quantityNumber -= 1;
  if (quantityNumber === 1) {
    minusButton.classList.remove("more-than-one");
  }
  quantitySelector.value = quantityNumber;
});

// add to cart button

const buyProduct = document.querySelector(".js-buy-button");
const quantityInput = document.querySelector(".js-quantity");
const addedToCart = document.querySelector(".js-added-to-cart");
const invalidValue = document.querySelector(".invalid-value");

buyProduct.addEventListener("click", () => {
  quantityNumber = parseInt(quantitySelector.value);
  if (quantityNumber === "" || quantityNumber < 1 || isNaN(quantityNumber)) {
    invalidValue.style.display = "block";
    return;
  } else {
    invalidValue.style.display = "none";
    addedToCart.style.opacity = "1";
    addedToCart.style.bottom = "0";
    setTimeout(removeAnimation, 1000);
    setTimeout(backPossition, 1100);
  }
});

function removeAnimation() {
  addedToCart.style.opacity = "0";
}

function backPossition() {
  addedToCart.style.bottom = "-40px";
}

// responsive-header

let prevScrollPos = window.scrollY;
const header = document.querySelector("header");
const buttons = document.querySelectorAll(".header-transition");
const icons = document.querySelectorAll(".icon");

window.onscroll = () => {
  let currentScrollPos = window.scrollY;

  if (currentScrollPos > -1000 && currentScrollPos < 1000) {
    header.style.backgroundColor = "white";
    header.style.position = "relative";
    header.style.top = "0";

    buttons.forEach((button) => {
      button.style.color = "#595858";
    });

    icons.forEach((icon) => {
      icon.style.color = "black";
    });
    document.querySelector(".logo").innerHTML = `<a href="#"
    ><img class="amazon-logo1" src="images/amazon-logo.png" alt=""
  /></a>`;
  } else if (prevScrollPos > currentScrollPos && currentScrollPos > 1000) {
    header.style.top = "0";
    header.style.backgroundColor = "#2f2f2f";
    header.style.position = "fixed";
    header.style.width = "100%";

    buttons.forEach((button) => {
      button.style.color = "white";
    });

    icons.forEach((icon) => {
      icon.style.color = "white";
    });

    document.querySelector(".logo").innerHTML = `<a href="#"
    ><img class="amazon-logo1" src="images/amazon-logo-white.png" alt=""
  /></a>`;
  } else {
    header.style.top = "-140px";
  }
  prevScrollPos = currentScrollPos;
};

// menu for hpone

let movingMenu = document.querySelector(".moving-menu");
let openMenuButton = document.querySelector(".js-menu-icon");
let closeMenuButton = document.querySelector(".close-menu");
let greyScreen = document.querySelector(".js-grey-screen");
let header1 = document.querySelector("header");

openMenuButton.addEventListener("click", () => {
  movingMenu.style.left = "0";
  greyScreen.style.display = "block";
  document.body.classList.add("no-scroll");
});

greyScreen.addEventListener("click", () => {
  greyScreen.style.display = "none";
  movingMenu.style.left = "-300px";
  document.body.classList.remove("no-scroll");
});

closeMenuButton.addEventListener("click", () => {
  movingMenu.style.left = "-300px";
  greyScreen.style.display = "none";
  document.body.classList.remove("no-scroll");
});
