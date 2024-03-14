import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';
import bomb from './assets/img/bomb.svg';


const bombElem = document.querySelector('.bomb');
const imgBomb = new Image();
imgBomb.src = bomb;
imgBomb.width = 300;
bombElem.append(imgBomb);

console.log('hi');
console.log(mult(3, 4));
console.log(sum(3, 4));