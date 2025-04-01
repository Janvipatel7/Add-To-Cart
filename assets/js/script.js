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
            <button class="btn btn-danger"> Add To Cart</button>
        </div>
        </div>`
})