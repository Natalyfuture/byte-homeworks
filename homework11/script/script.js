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

 

  const productsContent = (elem) =>{

    const productName = products.map((elem) => elem.name);
    const productBrand = products.map((elem) => elem.brand);
    const productsProperty = products.map((elem) => elem.properties);

    for(let i = 0; i < products.length; i++){

        let productItemName = productName[i];
        let productItemBrand = productBrand[i];
        let productsItemProperty = productsProperty[i];

            const productCards = (Name, Brand) => {

                const productCardsContainer = document.createElement("div");
                const productTitle = document.createElement("h1");
                const productSubtitle = document.createElement("h3");

                productTitle.innerText = Name;
                
                productSubtitle.innerText = Brand;

                const productCardsHTML = `
                <h1>${productItemName}</h1>
                <h3>${productItemBrand}</h3>
                `;
            
                productCardsContainer.innerHTML = productCardsHTML;

                return productCardsContainer; 

                
            }
            const productsItemCard = productCards(productItemName, productItemBrand);
            document.body.append(productsItemCard);


            const productsList = (arr) => {
            const list = document.createElement("ul");

              const listHTML = arr
              .map((item) => `<li>${item}</li>`)
              .join('');

              list.innerHTML =  listHTML; 
              
              return list;
                 
              } 

              const productsItemList =  productsList(productsItemProperty);
                  
              document.body.append(productsItemList);
        
        }
    
    }
        productsContent(products);
        