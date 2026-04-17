let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("total").innerText = total;

  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - KSh ${item.price}</p>`;
  });
}
