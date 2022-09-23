document.getElementById('keys-body').addEventListener('click', function(event){
    const keys = event.target;
    const dataAction = keys.dataset.action;
    const displayText = document.getElementById('operand-display');
    console.log(dataAction);
    
    if (dataAction === 'number'){
        displayText.value += keys.innerText; 
    }
    if(
        dataAction === 'divide' ||
        dataAction === 'mulplication' ||
        dataAction === 'addition' ||
        dataAction === 'substraction'
    ){
        displayText.value+=keys.innerText; 
    }
    if(dataAction === 'clear'){
        displayText.value = '';    
    }
    if(dataAction === 'delete'){
        displayText.value = displayText.value.slice(0, -1); 
    }
    if(dataAction === 'calculate'){
        displayText.value = eval(displayText.value);
    }

})
