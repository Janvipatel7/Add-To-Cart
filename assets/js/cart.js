let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
counter.innerHTML = cartArray.lrngth;
let cartItems = document.getElementById("cartItems");
let totalAmount = 0;




function displayCart(){
    totalAmount = 0;
    cartItems.innerHTML = "";

    cartArray.forEach((shopitem,idx) => {
        let subTotal = shopitem.quantity *  shopitem.price;
        totalAmount += subTotal;

        cartItems.innerHTML += `
         <div class="row py-2 px-2">
                <div class="col-6">
                    <div class="cart-image d-flex align-items-center">
                            <img src="${shopitem.image}" alt="" width="100%">
                    </div>
                     <div class="d-flex h-100 align-items-center ">
                        <h3 class="m-0 fs-5 text-secondary">${shopitem.name}</h3>
                    </div>
                </div>
                
                <div class="col-2">
                    <div class="d-flex align-items-center h-100 justify-content-center">
                        <span class="fs-7 text-dark fw-semibold">$${shopitem.price}</span>
                    </div>
                </div>
                <div class="col-2 ">
                    <div class=" d-flex align-items-center justify-content-center h-100">
                        <div class="d-flex gap-4 h-40 border ">
                            <button type="button" class="border-0 fw-bold button" onclick="updateQuantity(${idx}, -1)">
                                    <i class="bi bi-dash"></i>
                            </button>
                            <span id="quantityCount" class="fs-7 text-dark fw-semibold">${shopitem.quantity}</span>
                            <button type="button" class="border-0 fw-bold button" onclick="updateQuantity(${idx}, 1)">
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="d-flex align-items-center justify-content-between h-100 gap-4">
                        <span class="fs-7 text-dark fw-semibold">${subTotal}</span>
                        <button type="button" class="border-0 fs-5 button" onclick="deleteItem(${idx})">
                        <i class="bi bi-x-circle"></i>
                        </button>
                    </div>
                </div>
            </div>`
    })
    document.getElementById("bill").innerHTML = "";
    document.getElementById("bill").innerHTML += `
            <h5 class="card-header">Order Summary</h5>
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                    <h5 class="card-title">Subtotal</h5>
                    <span>$${totalAmount}</span>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-3">
                    <h5 class="card-title">Shipping</h5>
                    <span>$0</span>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-3">
                    <h5 class="card-title">Total</h5>
                    <span>$${totalAmount}</span>
                </div>
            </div>
        `
    
}
displayCart();
