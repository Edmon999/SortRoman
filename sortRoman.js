const deciToRom = (num) => {
  const arrOfRomDig = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
  ];
  if (num < 11) {
    return arrOfRomDig[num];
  }
  if (num > 10 && num < 40) {
    return "X".repeat(Math.floor(num / 10)) + arrOfRomDig[num % 10];
  }
  if (num >= 40 && num <= 50) {
    if (num === 40) {
      return "XL";
    } else if (num === 50) {
      return "L";
    }
    return "XL" + arrOfRomDig[num % 10];
  }
};

const sortRoman = (names) => {
  const objRom = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
  };
  const numRom = names.map((el) => {
    return (el = el
      .split(" ")[1]
      .split("")
      .map((item) => objRom[item])
      .reduce((num1, num2) => {
        return num2 > num1 ? num2 - num1 : num2 + num1;
      }));
  });
  let nameDec = [];
  for (let i = 0; i < names.length; i++) {
    let nameAndDigit = names[i].split(" ")[0] + " " + numRom[i];
    nameDec.push(nameAndDigit);
  }
  let finalArr = [];
  finalArr = nameDec.sort().map((el) => {
    el = el.split(" ")[0] + " " + deciToRom(+el.split(" ")[1]);
    return el;
  });
  return finalArr;
};
const arr = [
  "Steven XL",
  "Steven XVI",
  "David IX",
  "Mary XV",
  "Masy XIII",
  "Mary XX",
];
console.log(sortRoman(arr));
