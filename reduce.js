export function reduceArr(arr) {
  const newObj = arr.reduce((prev, currVal) => {
    let key = currVal[0];
    let val = currVal[1];
    prev[key] = val;
    return prev;
  }, {});
  return newObj;
}

export function findDuplicateNum(arr) {
  const duplicateObj = arr.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});
  return duplicateObj;
}

export function overallSum(arr) {
  const arra = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return arra;
}

export function convertArr(arr) {
  const newArr = arr.reduce((prev, { name, job }, i) => {
    prev[0] = name;
    prev[1] = job;
    return prev;
  }, []);
  return newArr;
}
