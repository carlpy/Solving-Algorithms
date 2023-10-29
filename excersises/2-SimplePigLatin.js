// codewars solution

export function pigIt(str) { 
  const regex1 = /\p{P}/gu;

  const newStr = str.split(" ").map((word) => {
    return (!regex1.test(word)) ? word.slice(1, word.length) + word.slice(0, 1) + "ay" : word;
  });
  return newStr.join(" ");
}