document.addEventListener("DOMContentLoaded", displayItems);

// Add a new item to the shopping list
function addItem() {
    let itemName = document.getElementById("itemName").value.trim();
    let itemPrice = document.getElementById("itemPrice").value.trim();

    // Validate the input fields
    if (itemName === "" || itemPrice === "") {
        alert("Please enter both item name and price.");
        return;
    }

    // Create an item object
    let item = {
        name: itemName,
        price: `Ksh ${itemPrice}`,
        purchased: false
    };

    // Retrieve the current shopping list or initialize an empty array
    let items = JSON.parse(localStorage.getItem("shoppingList")) || [];
    items.push(item);  // Add the new item
    localStorage.setItem("shoppingList", JSON.stringify(items));  // Save to localStorage

    // Clear the input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";

    // Update the displayed shopping list
    displayItems();
}

// Display the items in the shopping list
function displayItems() {
    let shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = "";  // Clear the existing list

    // Retrieve items from localStorage
    let items = JSON.parse(localStorage.getItem("shoppingList")) || [];

    // Loop through the items and display them
    items.forEach((item, index) => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        // Item HTML structure
        itemDiv.innerHTML = `
            <strong class="${item.purchased ? 'checked' : ''}">${item.name}</strong><br>
            <span class="${item.purchased ? 'checked' : ''}">${item.price}</span><br>
            <input type="checkbox" ${item.purchased ? "checked" : ""} onchange="togglePurchased(${index})"> Mark as purchased
            <button onclick="removeItem(${index})">X</button>
        `;

        shoppingList.appendChild(itemDiv);
    });
}

// Toggle the purchased status of an item
function togglePurchased(index) {
    let items = JSON.parse(localStorage.getItem("shoppingList")) || [];
    items[index].purchased = !items[index].purchased;  // Toggle the 'purchased' status
    localStorage.setItem("shoppingList", JSON.stringify(items));  // Save the updated list

    displayItems();  // Update the display
}

// Remove an item from the shopping list
function removeItem(index) {
    let items = JSON.parse(localStorage.getItem("shoppingList")) || [];
    items.splice(index, 1);  // Remove the item at the specified index
    localStorage.setItem("shoppingList", JSON.stringify(items));  // Save the updated list

    displayItems();  // Update the display
}

// Clear all items from the shopping list
function clearList() {
    localStorage.removeItem("shoppingList");  // Clear the list from localStorage
    displayItems();  // Update the display
}

