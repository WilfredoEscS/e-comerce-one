import { productServices } from "../services/product-services.js";
import { validate } from "../assets/js/validations.js";

const productForm = document.querySelector(`[data-type="editproduct"]`);
const inputURL = document.querySelector(`[data-type="imageurl"]`);
const inputName = document.querySelector(`[data-type="productname"]`);
const inputCategory = document.querySelector(`[data-type="productcategory"]`);
const inputPrice = document.querySelector(`[data-type="productprice"]`);
const inputDescription = document.querySelector(
  `[data-type="productdescription"]`
);
const currentUrl = new URL(window.location);
const id = currentUrl.searchParams.get("id");

// Checking if the id is undefined, if it is, it will redirect the user to the products.html page.
if (id == undefined) {
  window.location.replace("./products.html");
}


export const editProduct = async (id) => {
  const productList = await productServices.productList();
  try {
    // If the id is equal to the product.id, it will set the values of the inputs
    productList.forEach(async (product) => {
      if (id == product.id) {
        inputURL.value = product.imageURL;
        inputCategory.value = product.section;
        inputName.value = product.name;
        inputPrice.value = product.price.slice(2);
        inputDescription.value = product.description;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

editProduct(id);
