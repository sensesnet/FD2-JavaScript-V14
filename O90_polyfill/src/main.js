import "babel-polyfill";

import './style1.css';

import {quadra} from './second.js'

document.getElementById('HEADER').innerHTML+=" "+quadra(5);

var buttonElem=document.getElementById('BUTTON');
if ( buttonElem ) {
  buttonElem.addEventListener('click',()=>{
    debugger;
    var a=[5,10,15];
    var sum=0;
    a.forEach( v => sum+=v );
    console.log( a.findIndex(5) ); 
    alert('Сумма всех элементов массива = '+sum);
  });
}
