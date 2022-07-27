let filterBrand = [];
let FilterType = [];
const brand = document.getElementById("filterbrands");
const type = document.getElementById("filterbrands");
brand.addEventListener("change", evento);
let selectedSort = document.getElementById("sort-type");
let arrayBrand = [];

//load inicial todos os produtos.

async function init() {
  [product, filterBrand, filterType] = await Promise.all([
    listAllProducts(),
    listBrands(),
    listType(),
  ]);
  renderFilterBrand();
  //renderFilterType();
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
var uniqueArr = [...new Set(filterBrand.brand)];
//
function renderFilterBrand() {
  var uniqueArr = [...new Set(filterBrand.brand)];
  for (const brands of uniqueArr) {
    const option = document.createElement("option");
    option.textContent = brands.brand;
    option.setAttribute("value", brand);
    option.value = brands.id;
    brand.appendChild(option);
  }
  //const filteredArray = option.filter((ele, pos) => option.indexOf(ele) == pos);
  //console.log(filteredArray);
}
//
function evento() {
  var e = document.getElementById("filterbrands");
  var values = e.value;
  alert(values);
}

//
function renderFilterType() {
  for (const type of filterType) {
    const option = document.createElement("option");
    option.textContent = type.name;
    option.setAttribute("value", type);
    option.value = type.id;
    type.appendChild(option);
  }
}

function clearFilter() {
  document.getElementById("app").innerHTML = "";
}

//EXEMPLO DO CÓDIGO PARA UM PRODUTO
function productItem(product) {
  const item = `<div class="product" data-name="NYX Mosaic Powder Blush Paradise" data-brand="nyx" data-type="bronzer" tabindex="508">
  <figure class="product-figure">
    <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/deedb7bd74bda43f062a09aab2ee1ec8_ra,w158,h184_pa,w158,h184.png" width="215" height="215" alt="NYX Mosaic Powder Blush Paradise" onerror="javascript:this.src='img/unavailable.png'">
  </figure>
  <section class="product-description">
    <h1 class="product-name">NYX Mosaic Powder Blush Paradise</h1>
    <div class="product-brands"><span class="product-brand background-brand">Nyx</span>
<span class="product-brand background-price">R$ 57.70</span></div>
  </section>
  // CARREGAR OS DETALHES
</div>`;
}

//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">nyx</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">10.49</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">5</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250"></div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">bronzer</div>
        </div>
      </div></section>`;
}
