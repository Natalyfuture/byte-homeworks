//                            Homework 20
//Реализуйте класс PublicService для подсчета коммунальных платежей.

//В классе должны быть реализованы такие методы:
//addMeterReadings для добавления показаний счетчиков, принимает 2 аргумента: название показателя и объем потребеления
//deleteMeterReadings для удаления показаний счетчиков, принимает 1 аргумент: название показателя
//getSum для подсчета суммы платежей исходя из показаний поданых счетчиков и текущих тарифов.
//Тарифы можете придумать свои, или взять из примера.
//Метод addMeterReadings должен быть защищен от передачи некорректных значений. Если при его вызове, было передано название показателя, 
//которое не перечислено в тарифах, то метод должен выбросить ошибку с текстом: Service --название сервиса-- is unavailble. Так же, если 
//показания подаются повторно (метод вызван второй раз с таким же названием показателя), то должна быть выброшена ошибка с текстом: 
//Service --название сервиса-- is already included
//Метод getSum возвращает результат подсчета суммы.
//Все методы должны быть записаны в prototype.
//Пример тарифов:

/* {
  hotWater: 7,
  coldWater: 1,
  gas: 0.3,
  electricity: 1.6,
}
 */


function PublicService (options){
const{indicatorName, tariff} = options;
this.indicatorName = indicatorName;
this.tariff = tariff;
this.index = false;
}

PublicService.prototype.addMeterReadings = function (indicatorName, consumptionVolume) {

  if(indicatorName === "hotWater" || indicatorName === "coldWater" || indicatorName === "gas" 
  || indicatorName === "electricity"){
    if(this.index === false){
  this.consumptionVolume = consumptionVolume;
  this.index = true;
  }else{
    throw new Error(`Service "${indicatorName}" is already included`);
  }
}else{
  throw new Error(`Service "${indicatorName}" is unavailable.`);
}
}


PublicService.prototype.deleteMeterReadings = function (indicatorName){
  this.consumptionVolume = "";
  this.index = false;
}

PublicService.prototype.getSum = function (){
  let sum = 0;

  sum = sum + this.tariff * this.consumptionVolume;
  console.log(sum);
  
  return sum;
}


const hotWater  = new PublicService({indicatorName:'hotWater', tariff: 7});
const coldWater =  new PublicService({indicatorName:'coldWater', tariff: 1});
const gas = new PublicService({indicatorName:'gas', tariff:0.3});
const electricity =  new PublicService({indicatorName:'electricity', tariff:1.6});



hotWater.addMeterReadings("hotWater", 100);
console.log(hotWater);
hotWater.deleteMeterReadings ("hotWater");
console.log(hotWater);

hotWater.addMeterReadings ("hotWater", 200);
console.log(hotWater);

coldWater.addMeterReadings ("coldWater", 100)
console.log(coldWater);
gas.addMeterReadings("gas", 10)
console.log(gas);
electricity.addMeterReadings("electricity", 350);
console.log(electricity);

const hotWaterSum = hotWater.getSum();
const coldWaterSum = coldWater.getSum();
const gasSum = gas.getSum();
const electricitySum = electricity.getSum();

const res = hotWaterSum + coldWaterSum + gasSum + electricitySum;
console.log(res);


