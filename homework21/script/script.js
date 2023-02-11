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

//Каждая карточка должна может быть удалена с доски. Для этого в ней должна присутствовать кнопка-крестик.

//Обязательно должны быть реализованы следующие классы:

//Сard - базовый класс для карточки, cодержит базовую логику отрисовки и удаления карточки.
//PlanetCard, StarshipCard и VehicleCard которые содержат в себе логику рендера необходимых полей для конкретного типа карточки
//API - класс содержащий в себе логику работы с сервером. Должны быть реальзованы методы для получения каждого ресурса и метод 
//для отправки запроса / обработки ошибок.
//Необязательное задание продвинутой сложности: При обновлении страницы / закрытии вкладки, карточки должны сохраняться. 
//То есть, при повторном входе пользователь должен увидеть ту же доску с карточками, что и при последнем визите.

const formContainer = document.getElementById('form-container');

const BASE_URL = 'https://swapi.dev/api/';


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
            select.classList.add('select');
                
                const optionHTML = this.arr
                .map(elem => `<option>${elem}</option>`)
                .join('');
                select.innerHTML = optionHTML;
                
                return select
            }
           
        if (this.nameInput === 'input'){
            const inputId = document.createElement('input');
            
            inputId.classList.add('input');
            
            inputId.setAttribute('placeholder', 'Введите id')
            
            return inputId
        }
    }
}


const renderForm =() =>{
    const form = document.createElement('form');
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.classList.add('button');
    button.innerText = 'Добавить';

    const selectElem = new Form('select', ['Vehicle', 'Starship', 'Planet']);
    const input = new Form ('input');

    form.append(selectElem, input, button);
    console.log(form)
    formContainer.append(form);

}
renderForm()


const handlerRequestErrors = async(response) =>{
    if(!response.ok){
        const error = await response.json();
        throw new Error(error);
    }
    return response;
}

const fetchChoice = async(id, select) =>{
    try{
        const response = await handlerRequestErrors(
            await fetch(`${BASE_URL}${select}${id}`));
        const choice = await response.json();
        console.log(choice)
    }catch(error){
        alert(error.message)
    }
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    const {value: select} = select;
    const { value: input} = id;

   /*  await input ({id}) */
}  
