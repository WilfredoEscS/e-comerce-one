import { productServices } from "./../services/product-services.js";
import { validate } from "../assets/js/validations.js";

const products = document.querySelector("[data-allproducts]");

const newProduct = (name, price, imageURL, id) => {
  const card = document.createElement("div");
  const editBtn = document.createElement("div");
  const trashBtn = document.createElement("div");
  const productImage = document.createElement("img");
  const productName = document.createElement("p");
  const productPrice = document.createElement("p");
  const productId = document.createElement("span");

  editBtn.setAttribute("src", "../assets/img/edit-icon.svg");
  productImage.setAttribute("src", imageURL);
  trashBtn.setAttribute("src", "../assets/img/trash-icon.svg");

  card.classList.add("product");
  editBtn.classList.add("edit__button");
  productImage.classList.add("product__image");
  productName.classList.add("product__description");
  productPrice.classList.add("product__price");
  trashBtn.classList.add("trash__button");
  productId.classList.add("product__code");

  productName.innerHTML = name;
  productPrice.innerHTML = price;
  productId.innerHTML = "#" + id;

  editBtn.setAttribute("data-edit", "");
  trashBtn.setAttribute("data-trash", "");

  card.appendChild(editBtn);
  card.appendChild(trashBtn);
  card.appendChild(productImage);
  card.appendChild(productName);
  card.appendChild(productPrice);
  card.appendChild(productId);

  const editButton = card.querySelector("[data-edit]");
  const delButton = card.querySelector("[data-trash]");

  /*
   * This is an event listener that is listening for a click event on the delete button. When the button
   * is clicked, the event is triggered and the function is executed.
   */
  delButton.addEventListener("click", async (e) => {
    e.preventDefault();
    id = delButton.parentElement.lastChild.innerHTML.slice(1);
    await productServices.delProduct(id);
  });

  return card;
};

const render = async () => {
  try {
    const productList = await productServices.productList();
    const url = new URL(window.location);
    const searchFilter = url.searchParams.get("search");
    productList.forEach((element) => {
      if (searchFilter == null) {
        // Appending the new product to the products section
        products.appendChild(
          newProduct(element.name, element.price, element.imageURL, element.id)
        );
      } else if (
        // Filtering the products by name, section and id.
        element.name.toLocaleLowerCase().includes(searchFilter.toLowerCase()) ||
        element.section.toLowerCase().includes(searchFilter.toLowerCase()) ||
        element.id.toLowerCase().includes(searchFilter.toLowerCase())
      ) {
        products.appendChild(
          newProduct(element.name, element.price, element.imageURL, element.id)
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

render();
