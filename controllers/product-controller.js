import { productServices } from "./../services/product-services.js";

const newSection = (sectionName) => {
  const section = document.createElement("article");
  const contain = `
  <div class="section__box">
      <h2 class="section__title">${sectionName}</h2>
      <a href="./products.html" class="link link--rightarrow">Ver todo</a>
  </div>`;

  section.innerHTML = contain;
  section.classList.add("section");
  section.setAttribute(`data-${sectionName.replace(" ", "")}`, "");
  return section;
};

const newProduct = (name, price, imageURL) => {
  const card = document.createElement("div");
  const productImage = document.createElement("img");
  const productName = document.createElement("p");
  const productPrice = document.createElement("p");
  const link = document.createElement("a");

  productImage.setAttribute("src", imageURL);

  card.classList.add("product");
  productImage.classList.add("product__image");
  productName.classList.add("product__description");
  productPrice.classList.add("product__price");

  link.classList.add("link");
  link.setAttribute("href", "#");

  productName.innerHTML = name;
  productPrice.innerHTML = price;
  link.innerHTML = "Ver producto";

  card.appendChild(productImage);
  card.appendChild(productName);
  card.appendChild(productPrice);
  card.appendChild(link);

  return card;
};

const gallery = document.querySelector("[data-gallery]");

const render = async () => {
  try {
    const productList = await productServices.productList();
    const sectionList = await productServices.sectionList();
    const sections = [];

    sectionList.forEach((element) => {
      const product = document.querySelector(
        `[data-${element.section.replace(" ", "")}]`
      );
      if (!sections.includes(element.section)) {
        gallery.appendChild(newSection(element.section));
        sections.push(element.section);
      }
    });
    productList.forEach((element) => {
      const product = document.querySelector(
        `[data-${element.section.replace(" ", "")}]`
      );
      product.appendChild(
        newProduct(element.name, element.price, element.imageURL)
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();
