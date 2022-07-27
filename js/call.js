function fetchJson(url, options) {
  return fetch(url, options).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error(r.statusText);
    }
  });
}
const urlMatriz = "https://makeup-api.herokuapp.com/api/v1/products.json";

function listAllProducts() {
  return fetchJson(`${urlMatriz}`);
}

function listBrands() {
  return fetchJson(`${urlMatriz}?brand`);
}
function listType() {
  return fetchJson(`${urlMatriz}?product_type`);
}
