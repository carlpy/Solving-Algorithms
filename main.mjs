import * as mz from "./excersises/1-MovingZeros.js"; // MovingZeros to the end
import * as spl from "./excersises/2-SimplePigLatin.js";
import * as bit from "./excersises/3-bitCount.js";
import * as twoS from "./excersises/4-TwoSum.js";
import * as duEn from "./excersises/5-DuplicateEncoder.js";
import * as ppl from "./excersises/6-BusDrop.js";

/* 1 - moveZeros || ([false,1,0,1,2,0,1,3,"a"]) == [false,1,1,2,1,3,"a",0,0] 
  let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]; 
  console.log(mz.getRealArr_FE(arr)); 
*/

/* 2 - SimplePigLatin || 'Pig latin is cool';  // igPay atinlay siay oolcay 
  let str = 'Hello world !'; // elloHay orldway !
  console.log(spl.pigIt(str))
*/

/* 3- Bit Counting || let bitcount = 1234.toString(2); 10011010010 find the number of one in there
  let n = 1234;
  console.log(bit.findOnes_RE(n));
*/

/* 4- Two Sum || nums = [2,7,11,15], target = 9 Output: [0,1] 
  let arr = [2,7,11,15]; let targ = 9;
  console.log(twoS.twoSum_F(arr, targ));
*/

/* 30/10/23 */

/* 5- Duplicate Encoder || "din"  =>  "(((", "recede"   =>  "()()()", "Success"  =>  ")())())"
  let testStr = "recede"; 
  console.log(duEn.getDuplicateStr_RE(testStr));
*/

/* 6- Bus Drop
  [[10,0],[3,5],[5,8]] => 5 [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] => 17 [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]] => 21 
  let people = [[10,0],[3,5],[5,8]];
  console.log(ppl.busDropIn(people));
*/

