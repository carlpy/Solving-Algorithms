export function getGap([g, m, n]) {
  let arr = [];
  for(let i = m; i < n; i++) { arr.push(i); }

  for(let i = 0; i < arr.length; i ++) {
    for(let y = 0; y < arr.length; y++){
      if(arr[i] - arr[y] === g && arr[i] % 2 != 0 && arr[y] % 2 != 0) {
        console.log(arr[i] - arr[y]);
        return [arr[y], arr[i]]
      }
    }
  }
  return null;  
}

/* // partially correct
  gap(2,100,110), [101, 103])
  gap(4,100,110), [103, 107])
  gap(6,100,110), null)
  gap(8,300,400), [359, 367])
  gap(10,300,400), [337, 347])
*/