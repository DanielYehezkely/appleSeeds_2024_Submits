const item = document.getElementById('item');
const sourceBox = document.getElementById('sourceBox');
const targetBox = document.getElementById('targetBox');



targetBox.addEventListener('dragover', function (event) {
    event.preventDefault()
});

targetBox.addEventListener('drop', function (event) {
    event.preventDefault();
    targetBox.appendChild(item);
})

sourceBox.addEventListener('dragover', function (event) {
    event.preventDefault()
});

sourceBox.addEventListener('drop', function (event) {
    event.preventDefault();
    sourceBox.appendChild(item);
})