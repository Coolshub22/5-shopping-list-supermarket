
// lol.js

// Function to add item to the shopping list
document.getElementById('addBtn').addEventListener('click', addItemToList);

// Add an item to the shopping list
function addItemToList() {
    const itemInput = document.getElementById('iteminput');
    const itemText = itemInput.value.trim();

    // Only add if the input is not empty
    if (itemText !== "") {
        const itemList = document.getElementById('itemlist');

        // Create a new list item (li)
        const li = document.createElement('li');
        
        // Create the checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('item-checkbox');
        checkbox.addEventListener('change', togglePurchased); // Listen for changes to checkboxes

        // Add item text
        const itemTextNode = document.createTextNode(itemText);

        // Create a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('removeBtn');
        removeButton.addEventListener('click', () => removeItem(li));

        // Append the checkbox, item text, and remove button to the list item
        li.appendChild(checkbox);
        li.appendChild(itemTextNode);
        li.appendChild(removeButton);

        // Append the list item to the unordered list
        itemList.appendChild(li);

        // Clear the input field after adding
        itemInput.value = '';
    } else {
        alert("Please enter an item!");
    }
}

// Function to mark an item as purchased (strike-through the text)
function togglePurchased(event) {
    const checkbox = event.target;
    const listItem = checkbox.parentElement;
    
    // Toggle the strikethrough based on the checkbox state
    if (checkbox.checked) {
        listItem.style.textDecoration = 'line-through';
    } else {
        listItem.style.textDecoration = 'none';
    }
}

// Function to remove an item from the list
function removeItem(item) {
    item.remove(); // Remove the list item
}

// Function to clear the entire shopping list
function clearList() {
    const itemList = document.getElementById('itemlist');
    itemList.innerHTML = ''; // Clear all items
}

// Optional: Function to handle form submission (for the contact form)
function submitForm(event) {
    event.preventDefault(); // Prevent form submission and page reload
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Handle form submission here, e.g., send data to a server or display a confirmation message
    document.getElementById('contactMessage').textContent = "Message sent! We'll get back to you soon.";
}


