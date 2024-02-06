// 論理演算子 AND（&&）とOR（||）について
const getIsSuccess = (math, english) => {
  if (math >= 80 && english >= 80) {
    return '合格';
  } else {
    return '不合格';
  }
}

console.log(getIsSuccess(60, 90)); // 不合格
console.log(getIsSuccess(90, 90)); // 合格
console.log(getIsSuccess(90, 70)); // 不合格


const getOtherSuccess = (math, english) => {
  if (math >= 80 || english >= 80) {
    return '合格';
  } else {
    return '不合格';
  }
}

console.log(getOtherSuccess(90, 90)); // 合格
console.log(getOtherSuccess(90, 70)); // 合格
console.log(getOtherSuccess(60, 60)); // 不合格

// !を使った真偽値
const bool1 = true;
console.log(!bool1); // false
console.log(bool1); // true
