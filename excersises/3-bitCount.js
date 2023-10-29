// codewars solution

export function findOnes_RE(int) {
  return int
    .toString(2)
    .split("")
    .reduce((prev, curr) => {
      return curr == "1" ? (prev = prev + 1) : prev;
    }, 0);
}

export const findOnes_FI = (int) => {
  return int
    .toString(2)
    .split("")
    .filter((item) => item != 0).length;
};

export const countBits = (n) => n.toString(2).split("0").join("").length;

