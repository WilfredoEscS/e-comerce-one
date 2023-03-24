import { productServices } from "../services/product-services.js";
import { validate } from "../assets/js/validations.js";

// Checking if the id is undefined, if it is, it will redirect the user to the products.html page.
if (id == undefined) {
  window.location.replace("./products.html");
}
