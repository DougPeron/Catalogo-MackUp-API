let filterBrand = [];
let filterType = [];
const brand = document.getElementById("filterbrands");
const type = document.getElementById("filtertypes");
let selectedSort = document.getElementById("sort-type");

//load inicial todos os produtos.

async function init() {
  [product, filterBrand, filterType] = await Promise.all([
    listAllProducts(),
    listBrands(),
    listType(),
  ]);
  renderFilterBrand();
  renderFilterType();
  let allProduct = renderProducts(product);
  document.getElementById("app").innerHTML = allProduct;
}
init();
//retorna produtos passados como parametro.
function renderProducts(product) {
  let rows = product.map((product) => {
    return `<div class="product" ${product.name} ${product.brand} data-type="bronzer" tabindex="508">
    <figure class="product-figure">
      <img src="${product.image_link}" width="215" height="215" alt="${product.name}" onerror="javascript:this.src='img/unavailable.png'">
    </figure>
    <section class="product-description">
      <h1 class="product-name">${product.name}</h1>
      <div class="product-brands"><span class="product-brand background-brand">${product.brand}</span>
  <span class="product-brand background-price">${product.price}</span></div>
    </section>  
  </div>`;
  });
  return `${rows.join("")}`;
}
//
//organiza por marca
async function addListBrand() {
  clearFilter();
  [product] = await Promise.all([listBrands()]);
  renderFilterBrand();
  let brandProduct = renderProducts(product);
  document.getElementById("app").innerHTML = brandProduct;
}
//
function renderFilterBrand() {
  let array = [];
  for (let brands of filterBrand) {
    array.push(brands.brand);
  }
  const filteredArray = array.filter((ele, pos) => array.indexOf(ele) == pos);
  for (const brands of filteredArray) {
    const option = document.createElement("option");
    option.textContent = brands;
    option.setAttribute("value", brand);
    option.value = brands;
    brand.appendChild(option);
  }
  //
  brand.addEventListener("change", viewFilterBrand);
}
//
function renderFilterType() {
  let array = [];
  for (let types of filterType) {
    array.push(types.product_type);
  }
  const filteredArray = array.filter((ele, pos) => array.indexOf(ele) == pos);
  for (const types of filteredArray) {
    const option = document.createElement("option");
    option.textContent = types;
    option.setAttribute("value", type);
    option.value = types;
    type.appendChild(option);
  }
  //
  type.addEventListener("change", viewFilterType);
}

function viewFilterBrand() {
  var e = document.getElementById("filterbrands");
  var values = e.value;
  let filteredBrand = [];
  for (let filter of filterType) {
    if (filter.brand == values) {
      filteredBrand.push(filter);
    }
  }
  document.getElementById("app").innerHTML = "";
  let render = renderProducts(filteredBrand);
  document.getElementById("app").innerHTML = render;
}
//
function viewFilterType() {
  var e = document.getElementById("filtertypes");
  var values = e.value;
  let filteredType = [];
  for (let filter of filterType) {
    if (filter.product_type == values) {
      filteredType.push(filter);
    }
  }
  document.getElementById("app").innerHTML = "";
  let render = renderProducts(filteredType);
  document.getElementById("app").innerHTML = render;
}
//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${product.brand}</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${product.price}</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${product.rating}</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${product.description}</div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${product.product_type}</div>
        </div>
      </div></section>`;
  return `${details.join("")}`;
}
