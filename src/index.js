module.exports = multiply;
function multiply(first, second) {
  let first_arr = first.split("").reverse();
  let second_arr = second.split("").reverse();
  let result = new Array();
  for (let i = 0; i < first_arr.length; i++) {
    for (let j = 0; j < second_arr.length; j++) {
      if(result[j + i] == undefined) {
        result.push(+first_arr[i] * +second_arr[j]);
      }
      else {
        result[j + i] = +result[j + i] + (+first_arr[i] * +second_arr[j]);
      }
      while (result[j + i] > 9) {
        if (result[j + i + 1] == undefined) {
          result.push(Math.floor(result[j + i]/10));
          result[j + i] = result[j + i] % 10;
        }
        else {
          result[j + i + 1] = +result[j + i + 1] + Math.floor(result[j + i]/10);
          result[j + i] = result[j + i] % 10;
        }
      }
    }
  }
  return result.reverse().join("");
}

