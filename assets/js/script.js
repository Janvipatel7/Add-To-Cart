let products = [
    {
        name : "Gold T-Bar Stud Earrings",
        price : "899",
        image : "./assets/images/product-1.jpg"
    },
    {
        name : "Silver Huggie Earrings",
        price : "789",
        image : "./assets/images/product-2.jpg"
    },
    {
        name : "Gold Belcher Chain",
        price : "569",
        image : "./assets/images/product-3.jpg"
    },
    {
        name : "Silver Eternity Stud Earrings",
        price : "60",
        image : "./assets/images/product-4.jpg"
    },
    
]

let cartArr = localStorage.getItem("cart") || [];
let counter = document.getElementById("counter")

function addToCart(productId){
    console.log(productId);

    let product =  products.find((item) => {
        return productId == item.id
    })

    let productIdx =  products.findIndex((item) => {
        return item.id == productId
    })
    console.log(productIdx);

    if(productIdx != -1){
        product[productIdx].quantity++
    }else{
        product.quantity = 1
        cartArr.push(product)
    }

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
            <button class="bg-color-icon" onclick = "addToCart(${product.id})">
                <i class="bi bi-cart3"></i>
            </button>
        </div>
        </div>`
})