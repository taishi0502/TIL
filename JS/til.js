'use strict';

const price = 1200;

console.log(price > 1000); //true
console.log(price < 1000); //false
console.log(price >= 1000); //true
console.log(price <= 1000); //false
console.log(price === 1000); //false
console.log(price !== 1000); //true


//false <-0, null, undefined, '' , false
//ture <- それ以外
console.log(Boolean(0));
console.log(Boolean('hello'));