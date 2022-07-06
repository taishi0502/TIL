'use strict';

const signal ='green';
if (signal === 'red'){
  console.log('stop');
} else if (signal === 'yellow'){
  console.log('Caution!');
} else if (signal === 'blue'){
  console.log('Go');
}
//switch使った方が良いよね

switch(signal/*ここは比較したい値*/){
  case 'red':
    console.log('stop');
    break;
  case 'yellow':
    console.log('Caution');
    break;
  case 'blue':
  case 'green':
    console.log('Go');
    break;

    default/*どれにも当てはまらない場合のデフォルト値*/ : 
    console.log('Wrong signal');
    break;

}