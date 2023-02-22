//GET

const productList = async () => {
  const response = await fetch("http://localhost:3000/products");
  return await response.json();
};

const sectionList = async () => {
  const response = await fetch("http://localhost:3000/products");
  return await response.json();
};

export const productServices = {
  productList,
  sectionList,
};
