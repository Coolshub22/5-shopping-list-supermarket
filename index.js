// start
document.addEventListener('DOMContentLoaded', function() {
    let shoppingItems=[];
    const shoppingList =
    document.getElementById('shopping-list');
    const itemInput =
    document.getElementById('item-input');
// add item
window.addItem = function() {
    const itemText = itemInput.value.trim();
    if (itemText === '') return; 
    shoppingItems.push({ name: itemText, purchased: false }); 
    
};
// render shopping list
function renderShoppingList() {
    shoppingList.innerHTML = '';
    shoppingItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.addEventListener('click', () => removeItem(index));
        shoppingList.appendChild(listItem);
    });
}
// remove item
function removeItem(index) {
    shopping