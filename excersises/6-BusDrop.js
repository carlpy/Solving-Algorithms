/* 
  [[10,0],[3,5],[5,8]] => 5
  [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] => 17
  [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]] => 21
  [[0,0]] => 0
*/

export function busDropIn(busStops) {
  return busStops.reduce((prev, curr) => {
    prev += curr[0]; prev -= curr[1];
    return prev;
  }, 0);
}