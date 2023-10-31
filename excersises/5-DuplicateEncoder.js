/* 
  Duplicate Encoder 
  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))(("
*/

export function getDuplicateStr_F(word) {
  let newStr = word.toLowerCase().split("");
  let occArr = [];

  for (let i = 0; i < newStr.length; i++) {
    let occ = 0;
    for (let y = 0; y < newStr.length; y++) {
      if (newStr[y] == newStr[i]) occ = occ + 1;
    }
    occArr.push(occ);
  }
  const newMap = occArr.map((item) => (item > 1 ? ")" : "(")).join("");
  return newMap;
}

export function getDuplicateStr_RE(word) {
  let newStr = word.toLowerCase().split("");
  return newStr
    .map((item, index, arr) => { return arr.indexOf(item) === arr.lastIndexOf(item) ? "(" : ")"; })
    .join("");
}
