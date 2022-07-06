'use strict';

const score = 60;
const name = 'kimura';

if (score >= 50 ){
  if (name === 'kimura'){
    console.log('Good job!');
  }
}
//↑入子になってて見づらいから論理演算子使おうね


//&&なおかつ（AND)
//||もしくは（OR)
// !〜ではない（NOT)

if (score >= 50 && name === 'kimura' ){
  console.log('Great');
}