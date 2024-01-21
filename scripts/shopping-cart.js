import { cart } from "../data/cart.js";
console.log(cart);

renderCart();

function renderCart() {
  let cartHTML = "";

  cart.forEach((product, index) => {
    let { image, name, author, cover, availability, priceInCents } = product;

    cartHTML += `
    <div class="product-container">
            <div class="image-section">
              <img src="${image}" alt="" />
            </div>

            <div class="product-detailes">
              <div class="detailes">
                <div class="name-author">
                  <p>
                  ${name}
                  </p>
                  <span>${author}</span>
                </div>
                <div class="product-description">
                  <p class="best-seller">
                    <span>#1 Best Seller</span> in Books
                  </p>
                  <p class="hardcover">${cover}</p>
                  <p class="in-stock">${availability}</p>
                  <div class="if-a-gift">
                    <input type="checkbox" /><label for=""
                      >This is a gift<a href="#"> Learn more</a></label
                    >
                  </div>
                  <div class="product-buttons">
                    <ul>
                      <li class="select-quantity">
                        <select value="" name="" id="">
                          <option value="0">0 (Delete)</option>
                          <option selected value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10+">10+</option>
                        </select>
                      </li>
                      <li class="delete-product" data-index="${index}"><span>Delete</span></li>
                      <li><span>Save for later</span></li>
                      <li><span>Compare with similar items</span></li>
                      <li class="share"><span>Share</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="price-block">$${priceInCents / 100}</div>
            </div>
          </div>`;
  });
  document.querySelector(".js-products").innerHTML = cartHTML;

  const deleteButtons = document.querySelectorAll(".delete-product");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.getAttribute("data-index"), 10);
      deleteProduct(index);
    });
  });
}

function deleteProduct(index) {
  cart.splice(index, 1);
  renderCart();
}

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
