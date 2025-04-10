let products = [
  {
    id: 1,
    name: "Gold T-Bar Stud Earrings",
    price: "899",
    image: "./assets/images/product-1.jpg"
  },
  {
    id: 2,
    name: "Silver Huggie Earrings ",
    price: "789",
    image: "./assets/images/product-2.jpg"
  },
  {
    id: 3,
    name: "Gold Belcher Chain",
    price: "569",
    image: "./assets/images/product-3.jpg"
  },
  {
    id: 4,
    name: "Silver Eternity Stud Earrings",
    price: "60",
    image: "./assets/images/product-4.jpg"
  },

]

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
function addToCart(productId) {


  let product = products.find((item) => {
    return productId == item.id
  })
  let productIdx = cartArr.findIndex((item) => {
    return item.id == productId
  })
  if (productIdx !== -1) {
    // cartArr[productIdx].quantity++;
    Swal.fire({
            icon: "warning",
            text: "Item Already Added !",
            position: 'bottom-end',
            toast: 'true',
            showConfirmButton: false,
            timer: 1500,
        });
  } else {
    product.quantity = 1;
    cartArr.push(product);
      Swal.fire({
        icon: "success",
        text: "Item added !",
        position: 'bottom-start',
        toast: 'true',
        showConfirmButton: false,
        timer: 1500,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartArr))
  counter.innerHTML = cartArr.length
}
counter.innerHTML = cartArr.length

let productsElement = document.getElementById("product");
products.forEach((product, idx) => {

  productsElement.innerHTML += `
          <div class="col-3">
              <div class="product-wrapper bg-unique box-shadow h-100">
                <div class="product-img p-4">
                  <img src="${product.image}" alt="${product.name}" class="img-fluid hide-bg">
                </div>
                <div class="cursor-pointer p-4">
                  <div class="text-center">
                    <h5 class="mt-2 fs-6 fw-semibold">${product.name}</h5>
                  </div>
                  <div class="d-flex align-items-center  justify-content-center">
                    <p class="m-0 fs-5">$${product.price}</p>
                  </div>
                  <div class="d-flex align-items-end height-100 justify-content-center mt-3">
                    <button class="bg-color"  onclick = "addToCart(${product.id})">
                      <i class="bi bi-cart3 ms-2"></i>
                      Add to cart
                    </button>
                </div>
              </div>
            </div>
          </div>

   `
})