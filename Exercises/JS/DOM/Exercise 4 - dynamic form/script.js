const dynamicForm = document.getElementById('dynamicForm');


const addField = () => {
    const newInput = document.createElement('input');
    dynamicForm.appendChild(newInput);
}

const submitForm = () => {
    const inputs = document.querySelectorAll('#dynamicForm input');
    let allFiled = true;
    let message = '';
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFiled = false;
        } else {
            message += input.value +'\n'
        }
        
    })
    if (allFiled) {
        alert('Submitted values:\n' + message );
    } else {
        alert('Please fill in all fields before submitting.');
    }
}