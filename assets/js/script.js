let products = [
    {
        id : 1,
        name : "Gold T-Bar Stud Earrings",
        price : "899",
        image : "./assets/images/product-1.jpg"
    },
    {
        id : 2,
        name : "Silver Huggie Earrings",
        price : "789",
        image : "./assets/images/product-2.jpg"
    },
    {
        id : 3,
        name : "Gold Belcher Chain",
        price : "569",
        image : "./assets/images/product-3.jpg"
    },
    {
        id : 4,
        name : "Silver Eternity Stud Earrings",
        price : "60",
        image : "./assets/images/product-4.jpg"
    },
    
]
let counter = document.getElementById("counter")

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(productId){
   

    let product =  products.find((item) => {
        return productId == item.id
    })


    
    let productIdx =  cartArr.findIndex((item) => {
        return item.id == productId
    })
    if (productIdx !== -1) {
        cartArr[productIdx].quantity++;
    }else{
        product.quantity = 1;
        cartArr.push(product);
    }
;
    

    localStorage.setItem("cart" , JSON.stringify(cartArr))
    counter.innerHTML = cartArr.length
   
}

let productsElement = document.getElementById("product");
products.forEach((product , idx) => {

    productsElement.innerHTML += `
    <div class="col-3">
        <div>
            <img src="${product.image}" alt="${product.name}" class="img-fluid">
        </div>
        <div>
            <h6 class="my-3 fw-semibold">${product.name}</h6>
        </div>
        <div class="d-flex  justify-content-between">
            <p>$ ${product.price}</p>
            <button class="bg-color" onclick = "addToCart(${product.id})">
                <i class="bi bi-cart3"></i>
            </button>
        </div>
        </div>`
})