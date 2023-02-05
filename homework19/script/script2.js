//                                      Задание 2
//С помощью сервиса swapi.dev запросите информацию о персонаже Звездных войн, а также все фильмы, в которых он появлялся.

//Для этого на странице должна быть форма, в которую пользователь может ввести id желаемого персонажа (доступны айди персонажей от 1 до 82).
//После отправки формы, необходио отправить запрос по адресу https://swapi.dev/api/people/ID где вместо ID необходимо подставить значение,
// которое пользователь ввел в форму.
//Далее, на странице необходимо отрендерить карточку с именем персонажа и кнопкой Фильмы.
//При клике на кнопку в карточке, необходимо добавить в карточку с персонажем названия всех фильмов, в которых он появлялся. Информация
// о каждом фильме хранится по ссылкам, которые перечисленны в массиве по ключу films в ответе на предыдущий запрос (запрос на /people/ID).
//Все запросы на фильмы необходимо отправлять с помощью метода Promise.all.

const input = document.getElementById("id_character");
const buttonID = document.getElementById("button_ID");
const form = document.getElementById("form");
const divContainer = document.getElementById("container")
const characterWrapper = document.getElementById("character_wrapper")

const BASE_URL = "https://swapi.dev/api/people"

const handleRequestErrors = async(response) => {
    if(!response.ok){
        const {error} = await response.json();
        throw new Error(error)
    }
    return response;
}

const getCharacter = async (id) =>{
    
    try{
        const response = await handleRequestErrors (
           await fetch(`${BASE_URL}/${id}`) 
        )
        const dataRes = await response.json();
        
        return dataRes
        
    }catch (error){
        alert(error.message)
    }
}

const renderCharacterCard = (name, allFilms) =>{
    characterWrapper.innerHTML = '';
    
    const wrapper = document.createElement('div')
    const h_Name = document.createElement('h1');
    const button_name = document.createElement('button');
    
    button_name.setAttribute('class', 'button')
    button_name.innerText = 'Фильмы';
    h_Name.innerText = name;
   
    wrapper.append(h_Name, button_name);
    characterWrapper.append(wrapper);

    button_name.addEventListener('click', ()=>{
        getAllFilms(allFilms)
    })
    
    return characterWrapper 
}

const getAllFilms = async (allFilms) => {

    const request = allFilms.map((url) => fetch(url));
    const responses = await Promise.all(request);
    const jsonResponses = responses.map((resp => resp.json()));
   
    const result = await Promise.all(jsonResponses);
        renderFilms({result: result})
        
}

const createMovieCards = (film) =>{
    const cardContainer = document.createElement('div');
    const nameFilm = document.createElement('p');

    nameFilm.innerText = film.title;
    cardContainer.append(nameFilm)
    return cardContainer
}

const renderFilms = ({result: film}) =>{
    const movieCards = film.map(createMovieCards);
    characterWrapper.append(...movieCards)
}


const handleForm =  async (event) => {
   event.preventDefault();
    
    const inputID = input.value;
    const character = {... await getCharacter(inputID)};

    const characterName = character.name;
    let allFilms = character.films;

    renderCharacterCard(characterName, allFilms);
   

}

form.addEventListener("submit", handleForm);