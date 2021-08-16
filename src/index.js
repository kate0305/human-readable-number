module.exports = function toReadable (number) {
  const arr = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const arrDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  
  let arrNumbers = [];
  
  const numberConvert = () => {
    let str = number.toString();
    for (let i = 0; i < str.length; i++) {
    arrNumbers.push(str[i]);
  }
    arrNumbers.map(Number);
    return arrNumbers;
  }

  if (number === 0) {return 'zero'}

  if (number > 0 && number < 20) {  
    return word = arr[number];
  }

  if (number >= 20 && number < 100) {
    numberConvert(number);
    return word = `${arrDozens[arrNumbers[0]]} ${arr[arrNumbers[1]]}`.trim();
  }

  if (number >= 100) {
    numberConvert(number);
    if (arrNumbers[1] < 2) {
    return word = `${arr[arrNumbers[0]]} hundred ${arr[number % 100]}`.trim();
    } else {
    return word = `${arr[arrNumbers[0]]} hundred ${arrDozens[arrNumbers[1]]} ${arr[arrNumbers[2]]}`.split(' ').filter(s => s).join(' ');
    }
  }
}
