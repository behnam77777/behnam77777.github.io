
function addToCart(productName) {
    const list = document.getElementById("cart-items");
    const item = document.createElement("li");
    item.textContent = productName;
    list.appendChild(item);
}
