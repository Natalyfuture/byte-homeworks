//Homework 19
//            Задание 1
//Получить информацию о стране, в которой находится пользователь (местонаходжение определяется по IP) и вывести на страницу 
//информацию о ней (название, столицу, валюту и флаг). Для этого вам понадобятся следующие API:

//Для получения названия, столицы и валюты используйте эндпойнт https://ipapi.co/json/ который вернет вам информацию о стране, 
//которой принадлежит ваш текущий IP адрес.
//Для получения флага сделайте запрос по адресу https://restcountries.com/v2/name/NAME где вместо NAME необходимо подставить 
//название страны, которое вы получите из первого запроса.
//Все запросы отправляйте методом GET. Обязательно используйте fetch и async await.


const container = document.getElementById('container');
const country_URL = 'https://ipapi.co/json/ ';
const country_flag_URL = 'https://restcountries.com/v2/name';

const handleRequestErrors = async(response) => {
    if(!response.ok){
        const {error} = await response.json();
        throw new Error(error)
    }
    return response;
}

const getData = async (url) => {
    try{
        const response = await handleRequestErrors (
            await fetch(url)
        )
        const dataRes = await response.json()
        
        return dataRes
        
    }catch (error){
        alert(error.message)
    }
}

const getFlagCountry = async (url) => {
    
    const flagCountry = await getData(url)

    return flagCountry
}

const getCountry = async () => {
   
    const countryData = await getData(country_URL)
   
    const country = countryData.country_name;
    const capital = countryData.country_capital;
    const currency = countryData.currency;
        
    return {country,
        capital,
        currency,
    }
    }
    

    const renderCountry = async () =>{
        const resCountry = await getCountry()

        const divInfo = document.createElement('div')
        const countryP = document.createElement('h1');
        const capitalP = document.createElement('h3');
        const currencyP = document.createElement('p');
        const flagImg = document.createElement('img');

        countryP.innerText = resCountry.country;
        capitalP.innerText = resCountry.capital;
        currencyP.innerText = resCountry.currency;

        const flag = {...await getFlagCountry(`${country_flag_URL}/${resCountry.country}`)};
        const flagRes = flag[0].flag

        divInfo.setAttribute('class', 'div_info')
        flagImg.setAttribute('class', 'image')
        flagImg.setAttribute('src', flagRes);
       
        divInfo.append(countryP, capitalP, currencyP, flagImg);
       
        container.append(divInfo);

        return container

    }
 
    renderCountry()
    

