const lastName = '鈴木';
const firstName = '太一';
const birthyear = '1993';
const hometown = '神奈川';

const greeting = `私の名前は${lastName}${firstName}です。${birthyear}年生まれで、${hometown}出身です。`;
console.log(greeting);


const animals = ['cat', 'dog', 'bird'];
console.log(animals);
console.log(animals[0]);
console.log(typeof animals);

animals.push('human');
console.log(animals);


animals.unshift('monkey');
console.log(animals);

const newanimals = animals.slice(0, 1);
console.log(newanimals);

// animals.splice(0, 1);
// console.log(animals);

const myProfile = {
  lastName: '鈴木',
  firstName: '太一',
  birthyear: '1993',
  hometown: '神奈川'
}

myProfile.gender = '男性';

console.log(myProfile);
console.log(myProfile.hasOwnProperty('lastName')); // true
console.log(myProfile.hasOwnProperty('sex')); // false
