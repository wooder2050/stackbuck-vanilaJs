async function getProductAll() {
  let response = await fetch("http://localhost:5000/product", {
    method: "GET",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "*",
    },
  });
  let responseJson = await response.json();
  const menuCategoryList = document.getElementsByClassName(
    "menu-category-list-menu"
  );
  for (let i = 0; i < menuCategoryList.length; i++) {
    menuCategoryList[i].classList.remove("menu-category-list-active");
  }
  const menuSelected = document.getElementById("menu-category-list-total");
  menuSelected.classList.add("menu-category-list-active");

  const productListWrapper = document.getElementsByClassName(
    "menu-product-list"
  )[0];
  productListWrapper.remove();
  const newProductList = document.createElement("div");
  newProductList.classList.add("menu-product-list");
  const wrapper = document.getElementsByClassName(
    "menu-product-list-wrapper"
  )[0];
  wrapper.append(newProductList);

  const productBox = responseJson.product.map((product, index) => {
    const newBox = document.createElement("div");
    newBox.classList.add("menu-product-box");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("id", `img${index + 1}`);
    imgElement.classList.add("menu-product-img");
    imgElement.dataset.img = product.img;

    const imgInner = document.createElement("div");
    imgInner.classList.add("menu-prodcut-img-inner");
    imgInner.append(imgElement);
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("menu-prodcut-img-wrapper");
    imgWrapper.append(imgInner);
    const productInner = document.createElement("a");
    productInner.classList.add("menu-product-inner");
    productInner.href = `./product.html?id=${product._id}`;
    productInner.append(imgWrapper);

    const productInfoWrapper = document.createElement("div");
    productInfoWrapper.classList.add("menu-product-info-wrapper");

    const productInfoCategory = document.createElement("div");
    productInfoCategory.classList.add("menu-product-info-category");
    productInfoCategory.innerHTML += product.category;
    productInfoWrapper.append(productInfoCategory);

    const productInfoName = document.createElement("div");
    productInfoName.classList.add("menu-product-info-name");
    productInfoName.innerHTML += product.name;
    productInfoWrapper.append(productInfoName);

    const productInfoEngName = document.createElement("div");
    productInfoEngName.classList.add("menu-product-info-eng_name");
    productInfoEngName.innerHTML += product.name_eng;
    productInfoWrapper.append(productInfoEngName);

    const productInfoIngredient = document.createElement("div");
    productInfoIngredient.classList.add("menu-product-info-ingredient");
    const productInfoKcal = document.createElement("div");
    productInfoKcal.classList.add("menu-product-info-kcal");
    productInfoKcal.innerHTML += `kcal ${product.kcal}`;
    productInfoIngredient.append(productInfoKcal);
    const dash = document.createElement("div");
    dash.innerHTML += "/";
    productInfoIngredient.append(dash);
    const prodcutInfoCaffeine = document.createElement("div");
    prodcutInfoCaffeine.classList.add("menu-product-info-caffeine");
    prodcutInfoCaffeine.innerHTML += `caffeine ${product.caffeine}`;
    productInfoIngredient.append(prodcutInfoCaffeine);
    productInfoWrapper.append(productInfoIngredient);

    const productInfoPrice = document.createElement("div");
    productInfoPrice.classList.add("menu-product-info-price");
    productInfoPrice.innerHTML += `${product.price.toLocaleString()}원`;
    productInfoWrapper.append(productInfoPrice);

    newBox.append(productInner);
    newBox.append(productInfoWrapper);
    return newBox;
  });
  productBox.map((el) => newProductList.append(el));
}

async function setObserver(category) {
  if (category) await getProductByCategory(category);
  else await getProductAll();
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        entry.target.className === "menu-product-img"
      ) {
        let ImageUrl = entry.target.getAttribute("data-img");
        if (ImageUrl) {
          entry.target.src = ImageUrl;
          observer.unobserve(entry.target);
        }
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const imgList = document.getElementsByClassName("menu-product-img");
  for (let i = 0; i < imgList.length; i++) {
    observer.observe(document.getElementById(`img${i + 1}`));
  }
}
setObserver();

async function getProductByCategory(category) {
  let response = await fetch(
    `http://localhost:5000/product?category=${category}`,
    {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
      },
    }
  );
  let responseJson = await response.json();
  const productListWrapper = document.getElementsByClassName(
    "menu-product-list"
  )[0];
  productListWrapper.remove();
  const newProductList = document.createElement("div");
  newProductList.classList.add("menu-product-list");
  const wrapper = document.getElementsByClassName(
    "menu-product-list-wrapper"
  )[0];
  wrapper.append(newProductList);

  const productBox = responseJson.product.map((product, index) => {
    const newBox = document.createElement("div");
    newBox.classList.add("menu-product-box");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("id", `img${index + 1}`);
    imgElement.classList.add("menu-product-img");
    imgElement.dataset.img = product.img;

    const imgInner = document.createElement("div");
    imgInner.classList.add("menu-prodcut-img-inner");
    imgInner.append(imgElement);
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("menu-prodcut-img-wrapper");
    imgWrapper.append(imgInner);
    const productInner = document.createElement("a");
    productInner.classList.add("menu-product-inner");
    productInner.href = `./product.html?id=${product._id}`;
    productInner.append(imgWrapper);

    const productInfoWrapper = document.createElement("div");
    productInfoWrapper.classList.add("menu-product-info-wrapper");

    const productInfoCategory = document.createElement("div");
    productInfoCategory.classList.add("menu-product-info-category");
    productInfoCategory.innerHTML += product.category;
    productInfoWrapper.append(productInfoCategory);

    const productInfoName = document.createElement("div");
    productInfoName.classList.add("menu-product-info-name");
    productInfoName.innerHTML += product.name;
    productInfoWrapper.append(productInfoName);

    const productInfoEngName = document.createElement("div");
    productInfoEngName.classList.add("menu-product-info-eng_name");
    productInfoEngName.innerHTML += product.name_eng;
    productInfoWrapper.append(productInfoEngName);

    const productInfoIngredient = document.createElement("div");
    productInfoIngredient.classList.add("menu-product-info-ingredient");
    const productInfoKcal = document.createElement("div");
    productInfoKcal.classList.add("menu-product-info-kcal");
    productInfoKcal.innerHTML += `kcal ${product.kcal}`;
    productInfoIngredient.append(productInfoKcal);
    const dash = document.createElement("div");
    dash.innerHTML += "/";
    productInfoIngredient.append(dash);
    const prodcutInfoCaffeine = document.createElement("div");
    prodcutInfoCaffeine.classList.add("menu-product-info-caffeine");
    prodcutInfoCaffeine.innerHTML += `caffeine ${product.caffeine}`;
    productInfoIngredient.append(prodcutInfoCaffeine);
    productInfoWrapper.append(productInfoIngredient);

    const productInfoPrice = document.createElement("div");
    productInfoPrice.classList.add("menu-product-info-price");
    productInfoPrice.innerHTML += `${product.price.toLocaleString()}원`;
    productInfoWrapper.append(productInfoPrice);

    newBox.append(productInner);
    newBox.append(productInfoWrapper);
    return newBox;
  });

  productBox.map((el) => newProductList.append(el));

  const menuCategoryList = document.getElementsByClassName(
    "menu-category-list-menu"
  );

  for (let i = 0; i < menuCategoryList.length; i++) {
    menuCategoryList[i].classList.remove("menu-category-list-active");
  }
  let menuEl;
  switch (category) {
    case "콜드 브루":
      menuEl = document.getElementById("coldBrew");
      break;
    case "에스프레소":
      menuEl = document.getElementById("espresso");
      break;
    case "프라푸치노":
      menuEl = document.getElementById("frappuccino");
      break;
    case "블렌디드":
      menuEl = document.getElementById("blended");
      break;
    case "스타벅스 피지오":
      menuEl = document.getElementById("fizzio");
      break;
    case "티":
      menuEl = document.getElementById("tea");
      break;
    case "스타벅스 주스":
      menuEl = document.getElementById("juice");
      break;
  }
  menuEl.classList.add("menu-category-list-active");
}

const toggleCategoryMenu = document.getElementsByClassName(
  "menu-category-list-name-mobile"
)[0];
toggleCategoryMenu.addEventListener("click", function (e) {
  const categoryListInner = document.getElementsByClassName(
    "menu-category-list-inner-moblie"
  )[0];
  const headerInner = document.getElementById("header-inner");
  const root = document.getElementById("root");
  if (
    categoryListInner.className.split(" ").indexOf("category-list-active") !==
    -1
  ) {
    categoryListInner.classList.remove("category-list-active");
    headerInner.classList.remove("active");
    root.style.removeProperty("overflow");
  } else {
    categoryListInner.classList.add("category-list-active");
    headerInner.classList.add("active");
    root.style.overflow = "hidden";
  }
});
