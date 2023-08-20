let itemCount = 0; // Initialize the item count
let totalPrice = 0;
const couponBtn = document.getElementById("coupon-btn");
couponBtn.disabled = true;

function clickEvent(target) {
  const itemName = target.parentNode.childNodes[1].childNodes[7].innerText;
  const itemPrice = parseFloat(
    target.parentNode.childNodes[1].childNodes[9].innerText.split(" ")[0]
  );

  const li = document.createElement("li");

  // Increment the item count for each new item
  itemCount++;

  // Add classes and content to the list item and items prices
  li.classList.add("m-1", "pl-2");
  li.innerHTML = `${itemCount}. ${itemName} ${itemPrice} TK`;

  const productList = document.getElementById("product-list");
  productList.appendChild(li);

  // Update the total price
  totalPrice += itemPrice;
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.innerText = `${totalPrice.toFixed(2)} TK`;

  // Check and update coupon button
  if (totalPrice >= 200) {
    couponBtn.disabled = false;
  }
}

document.getElementById("coupon-btn").addEventListener("click", function () {
  const coupon = document.getElementById("coupon");
  if (coupon.value === "SELL200") {
    const discountField = document.getElementById("discount-field");
    const discount = (totalPrice * 20) / 100;
    discountField.innerText = discount.toFixed(2);
    const total = document.getElementById("total");
    total.innerText = (totalPrice - discount).toFixed(2);
    console.log(discount);
  }
});
