const data = {
    fruits: ['Apple', 'Banana', 'Cherry'],
    vegetables: ['Carrot', 'Broccoli', 'Lettuce'],
    dairy: ['Milk', 'Cheese', 'Yogurt']
};

const categories = document.getElementById('categories');
const items = document.getElementById('items');

categories.addEventListener('click', (event) => {
    const categoryElement = event.target;
    const categoryData = categoryElement.getAttribute('data-category');

    items.innerHTML = '';

    if (data[categoryData]) {
        const categoryItems = data[categoryData];
        for (const item of categoryItems) {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = item;
            itemDiv.classList.add('item');
            items.append(itemDiv);
        }
    }
});