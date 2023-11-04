import productList from './items.json'
console.log(productList)

const list = document.querySelector('.js-list');
list.addEventListener('click', addProduckt)

function markapProductList(arr) {
   return arr
     .map(
       ({ id, img, name, price, description }) => `<li class="product-card js-item" data-prod-id="${id}">
<img class="product-img" src="${img}" alt="${name}">
<h2 class="product-title">${name}</h2>
<p3 class="product-description">${description}</p3>
<p class="product-price">${price}</p>
<button class="product-add-btn">Додати до кошика</button>
</li>`
     )
     .join('');
}

list.insertAdjacentHTML('afterbegin', markapProductList(productList));


function addProduckt(e) {

    if (!e.target.classList.contains('product-add-btn')) {
         return
    }

    const productItem = e.target.closest(".js-item");
    const productId = +productItem.dataset.prodId;

    
  

}
