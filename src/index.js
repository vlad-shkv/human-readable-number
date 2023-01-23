module.exports = function toReadable (number) {
    let str = String(number);
  let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let dec = ['empty', 'empty','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  if (str.length === 1) {
    return num[number];
  }
  else if(str.length == 2 && str[0] == 1) {
    return teen[str[1]];
  }
  else if (str.length == 2 && str[1] == 0) {
    let first = dec[str[0]];
    return first;
  }
  else if (str.length == 2) {
    let first = dec[str[0]];
    let last = num[str[1]];
    return first + ' ' + last;
  }
  else if (str.length == 3) {
    let start = num[str[0]];
    let newStr = start + ' hundred';
    let other = Number(str[1] + str[2]);
      if (str[1] == 0 && str[2] == 0) {
        return newStr;
      }
    return newStr + ' ' + toReadable(other);
  }
}
