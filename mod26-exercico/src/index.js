
import './index.css';


import { cars } from './carros.js';

console.log(cars);


const filteredCarsId = cars.filter( (cars ) => {
  return cars.id === 2
})

console.log(filteredCarsId);

const filteredCarsMarca = cars.filter( (cars ) => {
  return cars.marca === 'ford'
})

console.log(filteredCarsMarca);


let toPrint = '';

document.getElementById('root').innerHTML = toPrint + filteredCarsId + ' ' + filteredCarsMarca;