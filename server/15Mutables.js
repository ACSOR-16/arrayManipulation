const products = [
  {title:"Pizza",price:121,id:"🍕"},
  {title:"Burger",price:121,id:"🍔"},
  {title:"Hot cakes",price:121,id:"🥞"},
];

const myProducts = [];

const IndexSearch = products.findIndex(item => item.id === "🥞");
if (IndexSearch !== 1) {
  myProducts.push(products[IndexSearch]);
  products.splice(IndexSearch, 1)
}
console.log(IndexSearch);
console.log(products);
console.log(myProducts);
// -------------------------//
const productsV2 = [
  {title:"Pizza",price:121,id:"🍕"},
  {title:"Burger",price:121,id:"🍔"},
  {title:"Hot cakes",price:121,id:"🥞"},
];

const update = {
  id:"🥞",
  changes:{
    price:200,
    description:'delicious'
  }
}

const IndexSearchUp = productsV2.findIndex(item => item.id === update.id);
productsV2[IndexSearchUp] = {
  ...productsV2[IndexSearchUp],
  ...update.changes,  
}

console.log(productsV2);