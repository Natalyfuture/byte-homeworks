//                          Homework 21
//Реализуйте мини-приложение SWAPI Board для отображения информмационных карточек о звёздных кораблях, планетах и сухопутном транспорте из вселенной Звёздных войн. В реализации вам поможет уже знакомое вам открытое АПИ (swapi).

//Для реализации необходимо использовать ES6 Class.

//На странице должна присутвовать форма, в которой присутствует select для выбора типа необходимого вам объекта (звёздный корабль, 
//сухопутное ТС или планета) и input, текстовое поле для ввода айди ресурса.

//При сабмите формы с выбраным типом и заполенным полем айди, отправляется запрос на сервер, и с полученными данными должна отрисоваться карточка на странице.

//Для получения данных вам понадобятся следующие эндпоинты

//https://swapi.dev/api/starships/${id} для кораблей
//https://swapi.dev/api/vehicles/${id} для сухопутного транспорта
//https://swapi.dev/api/planets/${id} для планет

//Карточки для каждого типа сущности должна отрисовать уникальные данные.

// Для звездных кораблей (starships) это:
//название (name)
//модель (model)
//производитель (manufacturer)
//максимальная скорость (max_atmosphering_speed)

//Для планет:
//название (name)
//климат (climate)
//поверхность (terrain)
//население (population) 

//Для сухопутного транспорта (vehicles):
//название (name)
//стоимость (cost_in_credits)
//количество человек в команде (crew)
//возможное количество пассажиров (passengers)
//Если неообходимого ресурса с переданным айди не существует, то должен быть показан alert с соответсвующим текстом.

//Каждая карточка  может быть удалена с доски. Для этого в ней должна присутствовать кнопка-крестик.

//Обязательно должны быть реализованы следующие классы:

//Сard - базовый класс для карточки, cодержит базовую логику отрисовки и удаления карточки.
//PlanetCard, StarshipCard и VehicleCard которые содержат в себе логику рендера необходимых полей для конкретного типа карточки
//API - класс содержащий в себе логику работы с сервером. Должны быть реальзованы методы для получения каждого ресурса и метод 
//для отправки запроса / обработки ошибок.
//Необязательное задание продвинутой сложности: При обновлении страницы / закрытии вкладки, карточки должны сохраняться. 
//То есть, при повторном входе пользователь должен увидеть ту же доску с карточками, что и при последнем визите.

const formContainer = document.getElementById('form-container');
const cardContainer = document.getElementById('cards_container');
const preloader = document.getElementById('preloader');
const BASE_URL = 'https://swapi.dev/api';



const handlerRequestErrors = async(response) =>{
    if(!response.ok){
      const error = 'Not found'
        throw new Error(error);
    }
    return response;
}

const showPreloader = (show) =>{
    if(show){
        preloader.style.display = 'block';
    }else{
        preloader.style.display = 'none';

    }
}
showPreloader(true);

const fetchChoice = async(input, select) =>{
    console.log(input)
    try{
        const response = await handlerRequestErrors(
          
            await fetch(`${BASE_URL}/${select}/${input}`));

          if(select === 'vehicles'){
            const {name, cost_in_credits, crew, passenger} = await response.json();
            
                return {
                    id: input,
                    name,
                    cost_in_credits,
                    crew,
                    passenger,
                }
          }

          if(select === 'planets'){
            const {name, climate, terrain, population} = await response.json();
                    return{
                    id: input,
                    name,
                    climate,
                    terrain, 
                    population,
                }
          }

        if(select === 'starships'){
             const{name, model, manufacturer, max_atmosphering_speed} = await response.json();
                return{
                    id: input,
                    name,
                    model,
                    manufacturer,
                    max_atmosphering_speed,
                }
        }
    }catch(error){
        alert(error.message)
    }
}

const  handleFormSubmit = async (event) => {
    showPreloader(true);
    
    event.preventDefault();
    console.log(localStorage)
  
        const input = document.getElementById('input_id');
        const select = document.getElementById('select');

        const { value: id} = input;
        const {value: selectElem} = select;
        

        const currenChoice =  await fetchChoice(id, selectElem);
        
        if(currenChoice !== undefined){
            localStorage.setItem(id, selectElem);
        }
        
       
        console.log('currenChoice', currenChoice)

        const currentCard = new Card (currenChoice);
        showPreloader(false);
        currentCard.show();
    
}  

class Form {
    constructor (nameInput, arr){
        this.nameInput = nameInput;
        this.arr = arr;
        this.render()
        return (this.render())
    }    

    render(){
        
        if(this.nameInput === 'select'){
            const select = document.createElement('select');
            select.setAttribute('id', 'select')
            select.classList.add('select');
                
                const optionHTML = this.arr
                .map(elem =>`<option value=${ elem.toLowerCase()}>${elem}</option>`)
                .join('');
                select.innerHTML = optionHTML;
                
                return select;
            }
           
        if (this.nameInput === 'input'){
            const inputId = document.createElement('input');
            
            inputId.classList.add('input');
            
            inputId.setAttribute('placeholder', 'Введите id')
            inputId.setAttribute('id', 'input_id')
            
            return inputId;
        }
    }
   
}


const renderForm =() =>{
    
    const form = document.createElement('form');
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.classList.add('button');
    button.innerText = 'Добавить';

    const selectElem = new Form('select', ['Vehicles', 'Starships', 'Planets']);
    const input = new Form ('input');

    form.append(selectElem, input, button);
    formContainer.append(form);

    button.addEventListener('click', handleFormSubmit)
}
renderForm()

const showInterface = async () => {
    console.log(localStorage)
    if(localStorage !== null){
       for(key in localStorage){
        let id = key;
        console.log(id)
        let selectElem = localStorage.getItem(key);
        console.log(selectElem)
        const currenChoice =  await fetchChoice(id, selectElem);
        const currentCard = new Card (currenChoice);
        currentCard.show();
       }
    } 
    
}
showInterface()



class Card {

    constructor(options){
        console.log(options)
        const entries = Object.entries(options);
        console.log(entries)

        this.card = document.createElement('div');
        this.card.classList.add('card_content');
        this.arrId = [];
    
            entries.forEach(([key, value]) => {
                
                     if(key === 'id'){
                        this.arrId.push(Number(value));
                     }else if(key === "name"){
                        const h = document.createElement('h3')
                        h.innerText = `${key}:${value}`;
                        console.log(`${key}: ${value}`)
                        this.card.append(h);
                    }else if(key !== "id"){
                         const p = document.createElement('p');
                        p.classList.add('text')
                        p.innerText = `${key}: ${value}`;
                        console.log(`${key}: ${value}`)
                        this.card.append(p);
                }
            
            })
        this.render()
    }

    render(){
        
        this.checkbox = document.createElement('div');
        this.checkbox.classList.add('div_checkbox');
        this.checkboxElem = document.createElement('p')
        this.checkboxElem.innerText = 'X';
        this.checkbox.append(this.checkboxElem);
        
        this.card.append(this.checkbox);

        console.log(this.arrId)
            this.checkboxElem.addEventListener('click', (e, key) =>{
                key = this.arrId;
                console.log(this.arrId)
                this.hide(e);
                 localStorage.removeItem(this.arrId)
            } )
        
    }

    show(){
        cardContainer.append(this.card);
        console.log(this.card)
        
    }

    hide(event){
        const parent = event.target;
        console.log(parent)

        let currentCard = event.target.parentNode.parentNode;
        console.log(currentCard)
        
       
        currentCard.remove();
        /* showPreloader(true); */
    }
} 


