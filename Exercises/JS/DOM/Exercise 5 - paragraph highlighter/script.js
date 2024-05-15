const colorPicker = document.getElementById('colorPicker')

const highlight = (element) => {
    const color = colorPicker.value
    element.style.backgroundColor = color
}