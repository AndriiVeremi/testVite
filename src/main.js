import productList from './items.json'
console.log(productList)

const list = document.querySelector('.js-list');

function markapProductList(arr) {
    arr.map(
      ({ id, img, name, price, description }) => `<li class="product-card">
<img class="product-img" src="" alt="">
<h2 class="product-title"></h2>
<h3 class="product-description"></h3>
<p class="product-price"></p>
<button class="product-add-btn">Додати до кошика</button>
</li>`
    ).join('')
}

list.insertAdjacentElement('afterbegin', markapProductList(productList))


markapProductList(productList);