const objectInput = {
  element: 'text',
  name: 'login',
  label: 'Логин',
}


const arraySelect = {
    element: 'select',
    name: 'fruits',
    label: 'Выберите фрукты',
    options: [
      {
        text: 'Апельсины',
        value: 'oranges',
      },
      {
        text: 'Яблоки',
        value: 'apples',
      },
      {
        text: 'Груши',
        value: 'pears',
      },
    ]
  }
    
    let arrOptions = [];
    arrOptions = arraySelect.options;
    
const divContainer = document.getElementsByClassName('container');
const form = document.createElement('form');
form.setAttribute('id', 'form');

const createInputContainer = () =>{

  const inputContainer = document.createElement('div');
  inputContainer.classList.add("input-container");
  const input = document.createElement('input');
  const label = document.createElement('label');

    input.classList.add("input");
    
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'login');
    input.setAttribute('id', 'login');
   
    label.innerHTML = `<label for="${input.id}">Логин</label>`;
    label.classList.add('input_label')

    inputContainer.append(label, input);
    form.append(inputContainer);

    const span = document.createElement('span');
    span.classList.add('errorMessage');
    inputContainer.append(span);
    form.append(inputContainer);

    return divContainer.innerHTML = form;

}

const resInput = createInputContainer();
document.body.append(resInput);


const createSelectContainer = () => {

   const selectContainer = document.createElement('div');
  selectContainer.classList.add("select-container");

  const select = document.createElement('select')
  select.setAttribute('name', 'fruits');
  select.setAttribute('id', 'fruits');
  select.classList.add('input');

  const label = document.createElement('label');
    label.innerHTML = `<label for="${select.id}">Выберите фрукты</label>`;
    label.classList.add('input_label')

  const createOptions = (arr) =>{

    const option = document.createElement('option');
    optionHTML = arr
    .map((item) => `<option value=${item.value}>${item.text}</label>`)
    .join('\n');

    return optionHTML;
    }

    createOptions(arrOptions);

    select.innerHTML = optionHTML;
  
    label.classList.add('input_label')

    selectContainer.append(label, select);
    form.append(selectContainer);

    return divContainer.innerHTML = form;

}

const resSelect = createSelectContainer();
document.body.append(resSelect);


const button = document.createElement('button');
button.classList.add('button');
button.setAttribute('type', 'submit');
button.setAttribute('id', 'submit');
button.innerText = 'ОТПРАВИТЬ';

form.append(button)
document.body.append(form);


