const loginInput = document.getElementById('login');
const select = document.getElementById('fruits');


const validateForm = (login) => {

    let error = '';
    let isFormValid = true;

    if(!login){
        isFormValid = false;
        error = 'Вы не ввели логин';
    }
   return {
    isFormValid,
    error,
   }
   
}


const highlightErroredInput = (error) => {
    const text = error;
    const errorInput = form.querySelector('.input');
    const errorText = form.querySelector('.input ~ .errorMessage');

    errorInput.setAttribute('data-invalid', '');
    errorText.innerText =  text;

}

const handleInput = (event) => {
   
    const currentInput = event.target;
    
    if(event.target.hasAttribute('data-invalid')){
        event.target.removeAttribute('data-invalid');
    }

    const errorTextElement = form.querySelector(`input[name = ${currentInput.name}]
    ~.errorMessage`
    );
    errorTextElement.innerText = '';

}

const handleSelectChange = (event) => {
    
    const fruitChange = event.target;
    
}


const handleFormSubmit = (event) => {

    event.preventDefault();

    const loginValue = loginInput.value;

    const fruitValue = select.value;

    const validationResult = validateForm(loginValue);

    if(!validationResult.isFormValid){
        highlightErroredInput(validationResult.error)
    }else {
        console.log({
            login: loginValue,
            fruit: fruitValue,
        })
    }
}

form.addEventListener('submit', handleFormSubmit);
loginInput.addEventListener('input', handleInput);
select.addEventListener('change', handleSelectChange)
