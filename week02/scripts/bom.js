
buttonElement.addEventListener('click', () => {
    
    
    if (inputElement.value.trim() === '') {
        alert('Please enter a chapter title'); 
        inputElement.focus();                 
        return;                             
    }

    const liElement = document.createElement('li');

    liElement.textContent = inputElement.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    liElement.appendChild(deleteButton);

   
    listElement.appendChild(liElement);

    inputElement.value = '';

    inputElement.focus();
});


listElement.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {  
        e.target.parentElement.remove();  
    }
});
