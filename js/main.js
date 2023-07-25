// 1 Д/з задача конвектирум

let degreesCelsius = +prompt('Введите градус Цельсия')
let degreesFahrenheit = ( 9 / 5 ) * degreesCelsius + 32
console.log(`Фаренгейт ${degreesFahrenheit}`,`Цельсия ${degreesCelsius}`)
alert (`градус по шкале Фаренгейта ${degreesFahrenheit}`)

// 2 Д/з задача присвоения

const name = ('Arsenyi')
let admin = name
console.log('Админ', admin)

// Задача сколько надо столовых ложек муки (от жены)

let flour = +prompt('Введите кол-во муки в граммах')
const tablespoonOfFlour = 10
let tablespoon = (`${flour}`) / tablespoonOfFlour
console.log(`Кол-во ложек муки ${tablespoon}`)
alert (`нужно ${tablespoon} столовых ложек муки`)


// Задача что одеть (от жены)

let outsideTemperature = +prompt("Введите температуру на улице?");
// let age = +prompt("Сколько лет ребенку?")
switch(true){
  case -20 <= outsideTemperature && outsideTemperature <= -11 : 
      alert("Детям от 1 до 3 лет лучше надевать теплую кофту, колготы, шапочку, из верхней одежды предпочтительнее выбрать комбинезон или полукомбинезон.");
  break;
  case -10 <= outsideTemperature && outsideTemperature <= -5 : 
      alert("понадобится зимняя теплая куртка или утепленный комбинезон, под них нужно поддеть теплую кофту, комбинезон-слип или колготы, обязательна демисезонная шапочка, малышам от 0 до 3 желательно поддевать под нее теплую х/б шапочку.");
  break;
  case -4 <= outsideTemperature && outsideTemperature <= 10 : 
      alert("следует выбрать демисезонный комбинезон. Такую одежду производят из достаточно теплого материала, который обязательно должен быть водо- и ветронепроницаемым.");
  break;
  case 11 <= outsideTemperature && outsideTemperature <= 20 : 
  alert("хлопковый комбинезон (слип), конверт или комбинезон с небольшим утеплителем, тонкая шапочка, легкое одеяло при необходимости");
break;
case 20 <= outsideTemperature && outsideTemperature <= 35 : 
  alert("тонкая шапочка и следите что б ребенок не перегревался");
break;
}
