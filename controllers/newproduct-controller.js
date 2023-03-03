import { productServices } from "../services/product-services.js";
import { validate } from "../assets/js/validations.js";

const addProductForm = document.querySelector(`[data-type="addproduct"]`);

// Listening for a submit event on the addProductForm
addProductForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const category = document.querySelector(
    `[data-type="productcategory"]`
  ).value;
  const description = document.querySelector(
    `[data-type="productdescription"]`
  ).value;
  const name = document.querySelector(`[data-type="productname"]`).value;
  const price = document.querySelector(`[data-type="productprice"]`).value;
  const urlImage = document.querySelector(`[data-type="imageurl"]`).value;
  const id = uuid.v4().toString();
});
