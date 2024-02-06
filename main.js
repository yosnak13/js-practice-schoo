// if state
const getIsAdult = (age) => {
  if (age >= 18) {
    return '大人です';
  } else {
    return '未成年です';
  }
};

console.log(getIsAdult(40));
console.log(getIsAdult(16));


const checkBMI = (height, weight) => {
  const bmi = weight / (height * height);
  if (bmi >= 25) {
    return '太り過ぎです'
  } else if (bmi < 18.5) {
    return '痩せすぎです';
  } else {
    return '標準です';
  }
};

console.log(checkBMI(1.68, 60)); // 標準
console.log(checkBMI(1.76, 40)); // 痩せすぎ
console.log(checkBMI(1.76, 100)); // 太り過ぎ
