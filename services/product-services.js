//GET

const productList = async () => {
  const response = await fetch("http://localhost:3000/products");
  return await response.json();
};

const sectionList = async () => {
  const response = await fetch("http://localhost:3000/products");
  return await response.json();
};

const addProduct = async (section, description, name, price, imageURL, id) => {
  try {
/* Sending a POST request to the server. */
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
export const productServices = {
  productList,
  sectionList,
  addProduct,
};
