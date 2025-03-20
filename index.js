// Initially hide the shopping list and contact form
 document.getElementByid('container2').style.display = 'none';
document.getElementByid('container3').style.display = 'none';``

// Start the shopping list by hiding the intro and showing the shopping list and contact form
function startShoppingList() {
    // Fade out the intro section
    const introContainer = document.getElementByid('intro'); 
    introContainer.style.opacity = 0;  // Start fading out the intro container
    setTimeout(function() {
        introContainer.style.display = 'none';  // Completely hide it after fading out
    }, 500);  // Match the fade duration (0.5 seconds)

    // Show the shopping list section with a fade-in effect
    const shoppingContainer = document.getElementByid('container2');
    shoppingContainer.style.display = 'block';
    shoppingContainer.style.opacity = 0;

    setTimeout(function() {
        shoppingContainer.style.opacity = 1;  // Fade in the shopping container
    }, 10);  // A small delay to allow the element to be displayed before fading in
}

// Function to add items to the shopping list
function additem() {
    const itemInput = document.getElementById('iteminput');
    const itemValue = itemInput.value.trim();

    if (itemValue !== "") {
        const li = document.createElement('li');
        li.textContent = itemValue;
        document.getElementById('itemlist').appendChild(li);
        itemInput.value = "";  // Clear the input field after adding
    } else {
        alert('Please enter an item!');
    }
}

// Function to clear the shopping list
function clearShoppingList() {
    // Clear all items from the shopping list
    const itemList = document.getElementById('itemlist');
    itemList.innerHTML = "";  // This removes all <li> elements
}

// Handle form submission for the contact form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        document.getElementById('contactMessage').textContent = "Thank you for your message!";
        document.getElementById('email').value = "";  // Clear email field
        document.getElementById('message').value = "";  // Clear message field
    } else {
        document.getElementById('contactMessage').textContent = "Please fill in both fields.";
    }
});

// Function to clear the contact form
function clearContactForm() {
    // Clear the contact form input fields
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    document.getElementById('contactMessage').textContent = ""; // Clear any contact message
}

// Event listener to handle "Create Shopping List" button click
document.getElementById('shop-button').addEventListener('click', startShoppingList);
const shoppingList = []

document.getElementById("addBtn").addEventListener(click,function() {
    let newItem = "item" + count++;
    items.push(newItem);

    let listItem = document.createElement("li");
    listItem.textContent = newItem;
    document.getElementById("ItemList").appendChild(listItem);

    console.log(items);
})
