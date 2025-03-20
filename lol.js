// Initially hide the shopping list and contact form
document.getElementById('container2').style.display = 'none';
document.getElementById('container3').style.display = 'none';

// Start the shopping list by hiding the intro and showing the shopping list and contact form
function startShoppingList() {
    document.getElementById('container1').style.display = 'none';
    document.getElementById('container2').style.display = 'block';
    document.getElementById('container3').style.display = 'block';
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


