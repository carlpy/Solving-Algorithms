// codewars solution

export function getRealArr_FI(arr) { // filter 
  const clearArr = arr.filter(item => item != 0);
  const ceros = arr.filter(item => item === 0);
  const result = [...clearArr, ...ceros];
  return result;
}

export function getRealArr_FE(arr) { // forEach
  let noCeros = [];

  arr.forEach(element => { if(element !== 0) noCeros.push(element); });
  arr.forEach(element => { if(element === 0) noCeros.push(element); });
  return noCeros
}

export function getRealArr_IS(arr) { // using "Insertion sorting"
  let newArr = [...arr]; 

  for(let i = 0; i < newArr.length; i++) {
    let currentVal = newArr[i];
    let y = i - 1;
    while(y >= 0 && newArr[y] === 0) {
      newArr[y + 1] = newArr[y];
      y--;
    }
    newArr[y+1] = currentVal;
  }
  return newArr;
}

export function getRealArr_RE(arr) { // reduce
  const {ceros, noCeros} = arr.reduce(({ceros, noCeros}, currentVal) => {
  if(currentVal === 0) {
    return {ceros: [...ceros, currentVal], noCeros}
  } else {
    return {noCeros: [...noCeros, currentVal], ceros}
  }  

  }, {ceros: [], noCeros: []});

  return noCeros.concat(ceros);
}