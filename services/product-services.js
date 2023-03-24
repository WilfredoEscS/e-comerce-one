//GET

/**
 * It fetches the products from the server and returns the response as JSON
 * @returns An array of objects
 */
const productList = async () => {
  const response = await fetch("http://localhost:3000/products");
  return await response.json();
};

/**
 * SectionList is a function that fetches the products from the server and returns the response as a
 * JSON object.
 * @returns An array of objects
 */
const sectionList = async () => {
  const response = await fetch("http://localhost:3000/products");
  return await response.json();
};

/**
 * It sends a POST request to the server with the product's information
 * @param section - The section of the product.
 * @param description - The description of the product.
 * @param name - The name of the product.
 * @param price - The price of te product
 * @param imageURL - The URL of the image.
 * @param id - The id of the product.
 * @returns The response from the server.
 */
const addProduct = async (section, description, name, price, imageURL, id) => {
  try {
    // Sending a POST request to the server
    return await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        imageURL,
        price: `$ ${price}`,
        id,
        section,
        description,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * It takes in an id, and returns a fetch request to the server to delete the product with that id
 * @param id - The id of the product to be deleted.
 * @returns The response from the server.
 */
const delProduct = async (id) => {
  try {
    return await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * It takes in the name, imageURL, price, id, category, and description of a product and updates the
 * product with the given id
 * @param name - The name of the product
 * @param imageURL - The URL of the image of the product.
 * @param price - The price of the product 
 * @param id - The id of the product you want to update.
 * @param category - The category of the product.
 * @param description - "This is a description of the product"
 * @returns The response from the server.
 */
const updateProduct = async (
  name,
  imageURL,
  price,
  id,
  category,
  description
) => {
  try {
    return await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        imageURL,
        price: `$ ${price}`,
        id,
        category,
        description,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
export const productServices = {
  productList,
  sectionList,
  addProduct,
  delProduct,
  updateProduct,
};
