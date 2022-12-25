const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

const productCards = (Name, Brand) => {

  const productCardsContainer = document.createElement("div");

  const productCardsHTML = `
    <h1>${Name}</h1>
    <h3>${Brand}</h3>
    `;

  productCardsContainer.innerHTML = productCardsHTML;

  return productCardsContainer;


}
const productsList = (arr) => {
  const list = document.createElement("ul");

  const listHTML = arr
    .map((item) => `<li>${item}</li>`)
    .join('');

  list.innerHTML = listHTML;

  return list;

}

const productsContent = (elem) => {


  for (let i = 0; i < products.length; i++) {

    let productItemName = products[i].name;
    let productItemBrand = products[i].brand;
    let productsItemProperty = products[i].properties;


    const productsItemCard = productCards(productItemName, productItemBrand);
    document.body.append(productsItemCard);

    const productsItemList = productsList(productsItemProperty);

    document.body.append(productsItemList);

  }

}
productsContent(products);



