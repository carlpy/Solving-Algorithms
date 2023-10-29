import * as mz from "./excersises/1-MovingZeros.js"; // MovingZeros to the end
import * as spl from "./excersises/2-SimplePigLatin.js"
import * as bit from "./excersises/3-bitCount.js";
import * as twoS from "./excersises/4-TwoSum.js";

/* 1 - moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] 
  let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]; 
  console.log(mz.getRealArr_FE(arr)); ✅
*/

/* 2 - SimplePigLatin 'Pig latin is cool';  // igPay atinlay siay oolcay ✅
  let str = 'Hello world !'; // elloHay orldway !
  console.log(spl.pigIt(str))
*/

/* 3- Bit Counting  let bitcount = 1234.toString(2); 10011010010 find the number of one in there

*/

/* 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

let arr = [2,7,11,15];
let targ = 9;

console.log(twoS.twoSum_RE(arr, targ));

