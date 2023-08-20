let count = 0; // Initialize the count

function clickEvent(target) {
  const itemName = target.parentNode.childNodes[1].childNodes[7].innerText;
  const itemPrice =
    target.parentNode.childNodes[1].childNodes[9].innerText.split(" ")[0];

  const li = document.createElement("li");

  // Increment the count for each new item
  count++;

  // Add classes and content to the list item and items prices
  li.classList.add("m-1", "pl-2");
  li.innerHTML = `${count}. ${itemName} ${itemPrice} TK`;

  const productList = document.getElementById("product-list");
  productList.appendChild(li);
}
