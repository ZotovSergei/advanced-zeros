module.exports = function getZerosCount(number, base) {
  let arrayFactorization = [];
  let tmp = base;
  let tr = 2;
  let nBase = 0;
  let count = 0;
  while (tmp != 1) {
    let step = 0;
    while (tmp % tr == 0) {
      // tmp = ( Number(tmp / tr.toFixed()) ) ;
      tmp = (tmp / tr);
      step++;
    }
    if (step != 0) {
      nBase = tr;
      count = step;
      console.log(`tr: ${tr}, step: ${step}, tmp:  ${tmp}, nBase: ${nBase}`);
    }
    tr++;
  }

  let tmpBase = nBase;
  let step = 0;
  while (tmpBase<=number) {
    let tmp = tmpBase;
    while (tmp % nBase == 0) {
      // tmp = ( Number(tmp / nBase.toFixed()) ) ;
      tmp = ( tmp / nBase ) ;
      step++;
    }
    tmpBase = tmpBase+nBase;
  }
  if (step%count==5) {
    return Math.ceil(step/count); 
  } else {
    return Math.floor(step/count); 
  }
  // return  ( Math.floor( Number(step / count).toFixed()) );
}


// function getZerosCount(number, base) {
//   // your implementation
//   let arrayFactorization = [];
//   let tmp = base;
//   let tr = 2;
//   let nBase = 0;
//   let count = 0;
//   while (tmp != 1) {
//     let step = 0;
//     while (tmp % tr == 0) {
//       tmp = ( Number(tmp / tr.toFixed()) ) ;
//       step++;
//     }
//     if (step != 0) {
//       nBase = tr;
//       count = step;
//       console.log(`tr: ${tr}, step: ${step}, tmp:  ${tmp}, nBase: ${nBase}`);
//     }
//     tr++;
//   }

//   let tmpBase = nBase;
//   let step = 0;
//   while (tmpBase<=number) {
//     let tmp = tmpBase;
//     while (tmp % nBase == 0) {
//       tmp = ( Number(tmp / nBase.toFixed()) ) ;
//       step++;
//     }
//     tmpBase = tmpBase+nBase;
//   }
//   if (step%count==5) {
//     return console.log(Math.ceil(step/count)); 
//   } else {
//     return console.log(Math.floor(step/count)); 
//   }
//   console.log(step / count);
// }

// getZerosCount(72300914, 160);