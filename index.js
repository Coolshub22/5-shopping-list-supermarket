const shoppingList = []

document.getElementById("addBtn").addEventListener(click,function() {
    let newItem = "item" + count++;
    items.push(newItem);

    let listItem = document.createElement("li");
    listItem.textContent = newItem;
    document.getElementById("ItemList").appendChild(listItem);

    console.log(items);
})
