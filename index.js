const shoppingList = []

document.getElementById('addBtn').addEventListener('click', function() {
    const itemInput = document.getElementById('iteminput');
    const itemText = itemInput.value.trim();
    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        const itemList = document.getElementById('itemlist');
        itemList.appendChild(li);
    }
});

document.getElementById("clearBtn").addEventListener('click', function() {
    const itemList = document.getElementById('itemlist');
    itemList.innerHTML = ''; // Clear the list
});
