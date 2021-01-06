const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");

async function getProduct() {
  let response = await fetch(`http://localhost:5000/product/${productId}`, {
    method: "GET",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "*",
    },
  });
  let responseJson = await response.json();
  const imgBox = document.getElementsByClassName("product-detail-photo")[0];
  imgBox.src = responseJson.product.img;
  const nameBox = document.getElementsByClassName(
    "product-detail-main-info-name"
  )[0];
  nameBox.innerHTML = responseJson.product.name;
  const engNameBox = document.getElementsByClassName(
    "product-detail-main-info-eng-name"
  )[0];
  engNameBox.innerHTML = responseJson.product.name_eng;
  const priceBox = document.getElementsByClassName(
    "product-detail-main-price"
  )[0];
  priceBox.innerHTML = `${responseJson.product.price.toLocaleString()}원`;
  const contentBox = document.getElementsByClassName(
    "product-detail-content"
  )[0];
  contentBox.innerHTML = responseJson.product.content;
  const kcalNumber = document.getElementsByClassName(
    "product-detail-nutrition-kcal-number"
  )[0];
  kcalNumber.innerHTML = responseJson.product.kcal;

  const satFatNumber = document.getElementsByClassName(
    "product-detail-nutrition-sat_fat-number"
  )[0];
  satFatNumber.innerHTML = responseJson.product.sat_fat;

  const proteinNumber = document.getElementsByClassName(
    "product-detail-nutrition-protein-number"
  )[0];
  proteinNumber.innerHTML = responseJson.product.protein;

  const sodiumNumber = document.getElementsByClassName(
    "product-detail-nutrition-sodium-number"
  )[0];
  sodiumNumber.innerHTML = responseJson.product.sodium;

  const sugarsNumber = document.getElementsByClassName(
    "product-detail-nutrition-sugars-number"
  )[0];
  sugarsNumber.innerHTML = responseJson.product.sugars;

  const caffeineNumber = document.getElementsByClassName(
    "product-detail-nutrition-caffeine-number"
  )[0];
  caffeineNumber.innerHTML = responseJson.product.caffeine;
}

getProduct();
