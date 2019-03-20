module.exports = function getZerosCount(number, base) {
 
  // return  ( Math.floor( Number(step / count).toFixed()) );

  let factor = factorization(base);

  function factorization(base) {
    let objectArraysFactor = [];
    let exNum = 2;
    while (base != 1) {
      let step = 0;
      while (base % exNum == 0) {
        base = base / exNum;
        step++;
      }
      if (step != 0) {
        objectArraysFactor.push({
          exNum,
          step
        });
      }
      exNum++;
    }
    return objectArraysFactor;
  }

  let result = 10000000000000000000;
  for (const key in factor) {
    if (factor.hasOwnProperty(key)) {
      const exNumFactor = factor[key]['exNum'];
      const stepFactor = factor[key]['step'];
      let tmpExNum = exNumFactor;
      let step = 0;
      while (tmpExNum <= number) {
        let el = tmpExNum;
        while (el % exNumFactor == 0) {
          el = el / exNumFactor;
          step++;
        }
        tmpExNum = tmpExNum + exNumFactor;
      }
      let tmpResult = step/stepFactor;
      if (tmpResult <= result) {
        result = tmpResult;
      }
    }
  }
  return Math.floor(result);
}


// function getZerosCount(number, base) {

//   let factor = factorization(base);

//   function factorization(base) {
//     let objectArraysFactor = [];
//     let exNum = 2;
//     while (base != 1) {
//       let step = 0;
//       while (base % exNum == 0) {
//         base = base / exNum;
//         step++;
//       }
//       if (step != 0) {
//         objectArraysFactor.push({
//           exNum,
//           step
//         });
//       }
//       exNum++;
//     }
//     return objectArraysFactor;
//   }

//   let result = 10000000000000000000;
//   for (const key in factor) {
//     if (factor.hasOwnProperty(key)) {
//       const exNumFactor = factor[key]['exNum'];
//       const stepFactor = factor[key]['step'];
//       let tmpExNum = exNumFactor;
//       let step = 0;
//       while (tmpExNum <= number) {
//         let el = tmpExNum;
//         while (el % exNumFactor == 0) {
//           el = el / exNumFactor;
//           step++;
//         }
//         tmpExNum = tmpExNum + exNumFactor;
//       }
//       let tmpResult = Math.floor(step/stepFactor);
//       if (tmpResult <= result) {
//         result = tmpResult;
//       }
      
//     }
//   }
//   return Math.floor(result);
// }

// getZerosCount(105, 10);