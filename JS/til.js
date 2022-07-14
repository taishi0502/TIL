'use strict';

function showAd(message = 'Ad'){//仮引数
  console.log('------')
  console.log(`---${message}---`)
  console.log('------')
}


console.log('Tom id great!!');
showAd('Header Ad');//実引数
console.log('Bob id great!!');
showAd();
console.log('Alisa id great!!');
showAd('Footer Ad');
console.log('taishi id great!!');