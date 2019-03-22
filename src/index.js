module.exports = function getZerosCount(number, base) {


  let factor = factorization(base);

  function factorization(base) {
    let objectArraysFactor = [];
    let data = [];
    let exNum = 2;
    while (base != 1) {
      let step = 0;
      while (base % exNum == 0) {
        base = base / exNum;
        step++;
      }
      if (step != 0) {
        data.push(exNum, step)
        objectArraysFactor.push(data);
        data = [];
      }
      exNum++;
    }
    return objectArraysFactor;
  }

  let result = 10000000000000000000;
  let exNumFactor = 0;
  let stepFactor = 1;

  if (factor.length < 3) {
    if (factor.length == 1) {
      exNumFactor = factor[0][0];
      stepFactor = factor[0][1];
    }
    else if (factor[0][0] == 2 && (factor[0][1] >= ((factor[1][0] - 1) * (factor[1][1] + 1)))) {
      exNumFactor = factor[0][0];
      stepFactor = factor[0][1];
    } else {
      if (factor.length == 1) {
        exNumFactor = factor[0][0];
        stepFactor = factor[0][1];
      } else {
        exNumFactor = factor[1][0];
        stepFactor = factor[1][1];
      }
    }
  } else {
    exNumFactor = factor[factor.length - 1][0];
    stepFactor = factor[factor.length - 1][1];
  }
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
  let tmpResult = Math.floor(step / stepFactor);
  if (tmpResult <= result) {
    result = tmpResult;
  }

  return result;
}


// function getZerosCount(number, base) {

//   let factor = factorization(base);

//   function factorization(base) {
//     let objectArraysFactor = [];
//     let data = [];
//     let exNum = 2;
//     while (base != 1) {
//       let step = 0;
//       while (base % exNum == 0) {
//         base = base / exNum;
//         step++;
//       }
//       if (step != 0) {
//         data.push(exNum, step)
//         objectArraysFactor.push(data);
//         data = [];
//       }
//       exNum++;
//     }
//     return objectArraysFactor;
//   }
//   for (let i = 0; i < factor.length; i++) {
//     const element = factor[i];
//     console.log(element);
//   }
//   console.log(factor);

//   let result = 10000000000000000000;
//   // for (const key in factor) {
//   //   if (factor.hasOwnProperty(key)) {
//   //     const exNumFactor = factor[key]['exNum'];
//   //     const stepFactor = factor[key]['step'];
//   let exNumFactor = 0;
//   let stepFactor = 1;
//   // console.log(factor[0][0]);
//   // console.log(factor[0][1]);
//   // console.log(factor[1][0]);
//   // console.log(factor[1][1]);
//   console.log(factor[factor.length - 1][0]);
//   console.log(factor[factor.length - 1][1]);
//   if (factor.length < 3) {
//     if (factor.length == 1) {
//       exNumFactor = factor[0][0];
//       stepFactor = factor[0][1];
//     }
//     else if (factor[0][0] == 2 && (factor[0][1] >= ((factor[1][0] - 1) * (factor[1][1] + 1)))) {
//       exNumFactor = factor[0][0];
//       stepFactor = factor[0][1];
//     } else {
//       if (factor.length == 1) {
//         exNumFactor = factor[0][0];
//         stepFactor = factor[0][1];
//       } else {
//         exNumFactor = factor[1][0];
//         stepFactor = factor[1][1];
//       }
//     }
//   } else {
//     exNumFactor = factor[factor.length - 1][0];
//     stepFactor = factor[factor.length - 1][1];
//   }

//   console.log(exNumFactor);
//   console.log(stepFactor);
//   let tmpExNum = exNumFactor;
//   let step = 0;
//   while (tmpExNum <= number) {
//     let el = tmpExNum;
//     while (el % exNumFactor == 0) {
//       el = el / exNumFactor;
//       step++;
//     }
//     tmpExNum = tmpExNum + exNumFactor;
//   }
//   let tmpResult = (step / stepFactor);
//   if (tmpResult <= result) {
//     result = tmpResult;
//   }
//   console.log(result);
// }

// getZerosCount(70497638, 2);