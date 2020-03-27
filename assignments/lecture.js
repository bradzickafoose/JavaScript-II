// global (the world)
function country(countryName){
  const lang1 ='French'
  const lang2 ='English'
console.log(`People living in ${countryName} like to eat ${food}`);

  function province(provName){
    const food = "Maple Syrup";
    console.log(`Maple trees don't exist in the west but they do in ${provName} and they make ${food}`);

    function capitalCity(cityName){
      console.log(`${cityName} is the capital of ${countryName} and the official languages are ${lang1} and ${lang2} and the national food is ${food}`);
    
    }//this closes the city
    capitalCity('Ottawa');
  } //this closes the province
  province('Ontario');
}// this closes the country
country('Canada');

// it's code that's been identified elsewhere that we can use for later
// lexical === belong

// HOF and Callbacks 

// HOF - they can receive other functions as params 
function higherOrderFunction(num1, num2, callback){
  return callback(num1, num2);
}

// Callbacks - they are passed into other functions
const add = (num1, num2) =>{
  return num1 + num2;
}
const banana = (num1, num2) =>{
  return num1 - num2;
}
const divide = (num1, num2) => {
  return num1 / num2;
}
const multiply = (num1, num2) =>{
  return num1 * num2;
}

console.log(add(2,4));
console.log(higherOrderFunction(2,4, add));
console.log(higherOrderFunction(2,4, banana));
console.log(higherOrderFunction(2,4, divide));
console.log(higherOrderFunction(2,4, multiply));


//advanced array methods

const cityData = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

//.forEach
// we can do anything we want inside of the callback 
// must iterate over every item in the array 

cityData.forEach(function(currentValue){
  console.log(currentValue.state);
});

//.map()
// returns a new array 
// doesn't manipulate the original array 
//create a new array that return the states back to us in lower case
const newCityData = cityData.map(function(item){
  return item.state.toLowerCase();
});

console.log(newCityData);


//.filter()
/*
- returns a new array 
- does not manipulate the original 
- it filters out results in a new array 
*/

const newCityFilter = cityData.filter(function(item){
//   //true or false 
  return item.population < 500000;
});
console.log(newCityFilter);

// .reduce()
/*
- returns a value not an array 
- doesn't manipulate the original array 
- used sums or products 
*/

const cityData = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

const totalLandArea = cityData.reduce(function(accumulator, item){
  console.log(`I am the accumulator: ${accumulator}`);
  console.log(`I am the item: ${item.land_area}`);
  return accumulator + item.land_area; 
}, 0);
console.log(totalLandArea);
