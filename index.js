let map = {
  1:"I",
  4:"IV",
  5:"V",
  9:"IX",
  10:"X",
  40:"XL",
  50:"L",
  90:"XC",
  100:"C",
  400:"CD",
  500:"D",
  900:"CM",
  1000:"M",
}

function find(num) {
  let max = 0;
  for (const key in map) {
    let iKey = parseInt(key)
    if (iKey <= num) {
      if (iKey > max) {
          max = key;
      }
    }
  }  
  return max;
}

function convertToRoman(num) {
  let romanNumeral = [];
  let max = 0;
  while (num > 0) {
    max = find(num);
    romanNumeral.push(map[max]);
    num = num - max;
  }
  return romanNumeral.join('');
}

console.log(convertToRoman(36));