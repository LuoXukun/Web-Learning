var items, i;

items = document.getElementsByTagName("li");

for(i = 0; i < items.length; i++) {
    items[i].textContent += " :helloWorld";
}