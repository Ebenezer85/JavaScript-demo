//Creat a function that otputs Hello World

//Function declaration
// function sayHello() {
//     console.log('Hello World!');
// }
// sayHello();

// function greeting(message){
//     console.log(`${message}`)
// }
// greeting('Good Morning');


// function output(msg1 = 'GoodMorning', msg2 = 'Ebenezer'){
//     let goodGreeting = `${msg1} ${msg2}, Welcome to GoMyCode.`;
//     console.log (goodGreeting);
// };
// output()

// output('Muna')


// function addNumbers(num1, num2) {
//     let adding = num1 + num2;
//     return adding; 
// }
// console.log(addNumbers(3, 8));



// function subtractNumbers(num1, num2) {
//     let sub = num1 - num2;
//     console.log(sub);
// }

// function grading(score) {
//     if (score >= 70) {
//         console.log('Your garde is A excellent')
//     } else {
//         console.log('Your grade is B, pass')
//     }
// }

// grading(20)

//LOOP

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 2; i <= 20; i+= 2) {
//     console.log(i)
// }

// function getSum (x, y) {
//     let total = x + y;
//     return total //Any code that comes affer the return will not run
    
// }
// console.log(getSum (100,20));

// function getSum (x, y){
//     console.log (x+y);
// }
// getSum(200,400)

//Returning Values

// const findArea = function (radius){
//     let area = 3.14*radius**2;
//     return area
// }
// const result = findArea(10);
// console.log(result);

//alternative use of return

const calcVol = function(area){
    return 3.14*area;
};
let result = calcVol(8);
console.log(result)

//Arrow Function.

// const findVol = (vol) => {
//     let value = 100*vol;
//     return value
// }
// const out = findVol(10);
// console.log('The volume is:', out)

// const findVol = (vol) => {
//     return 100*vol;
// }

// console.log(findVol(10))
// // const out = findVol(10);
// // console.log('The volume is:', out)

// console.log('The volume is:', (findVol(10)))

// const calcArea = (radius) => {
//     return 3.142*radius**2;
// }
// const area = calcArea(5)
// console.log('The area is:', area)

// let myArray = [3,5,7,9,11,13,15,17,19]
// let operation = myArray.length;
// function complete() {
//     const val = 0;
//     for (i = 0; i < operation; i++) {
//         val += myArray[i];
//     }
//     return val 
// }
// complete();

// const friendsList = ['tomiwa', 'ade', 'ishola', 'emeka', 'muna', 'chika'];
// // console.log(friendsList[friendsList.length -1]); //displays the last array element
// // console.log(friendsList[5])
// //USING FOR LOOP IN AN ARRAY
// for (let x = 0; x <= friendsList.length; x++) {
//     console.log(friendsList[3]);

// }

// for (let guest of friendsList) {
//     console.log(friendsList[5])
// }

// for(let i in friendsList) {
//     console.log(friendsList[i]);
// }
// let candidate = prompt('Enter name')

// for (let guest of friendsList) {
//     if (candidate.length === guest) {
//         // console.log(`Welcome ${candidate}`);
//         // console.log(guest +", " + 'You are welcome!');
//         console.log(`Hello ${candidate} you are welcome to my party, enjoy!`);
//         break;

//     } else if (candidate !== guest) {
//         console.log(`${candidate} you are not invited`);
        
//     }
// }

// function myFriends () {
//     let guest = prompt('Please enter your name').toLowerCase();
//     for (let name of friendsList) {
//         if (guest === name){
//             console.log(`Hello ${guest}, you are welcome to my party`)
//             break;
//         } else {
//             console.log(`Hello ${guest} you are not invited, no access`)
//             break;
//         }

//     }
// }
// myFriends()
// myFriends() 

//ACCESSING EVEY ITEM IN AN ARRAY

// const sequence = [1, 1, 2, 3, 5, 8, 13]; //Array of numbers
// const random = ['tree', 795, [0, 1, 2, 4, 7]]; //array of strings, numbers and array.it is called Multidimensional array.

// console.log (random);
// console.log(random[2]); //this outputs the second element in the array ehich is the sub-array.
// console.log(random[2][4]); // this outputs the fourth element in the sub-array
// const bird = ['parrot', 'falcon', 'owl', 'eagle', 'pegeon'] // array of strings

// console.log(bird);  //outputs all the items in the array
// console.log(bird.length) //outputs the number items in the array
// console.log(bird[1]); //outputs the index number of an arraye element
// console.log(sequence[4]);
// bird[2] = 'fowl'; //this replaces index 2 element in the bird array with fowl (which must be in quotation marks; single or double).
// console.log(bird);

// console.log(bird.indexOf('fowl')); //outputs the position of the element 'fowl' in the array.
// console.log (random.indexOf('tree')) //outputs the position of 'tree' in the array
// function animals() {
// let birdName = prompt ('Enter bird name');
// for (let birds of bird)
//     if (birdName === birds){
//         console.log(`your ${birdName} will be delivered`);
//         break;
//     } else {
//         // console.log(`you have no bird`)
//         break;
//     }
// }
// animals()

// var usernumber = prompt('What is your number?');
//     var numbers = ['1', '2', '3'];
//     // for(let name of numbers) {
//     if (numbers.indexOf(usernumber) >=0 ) //If the user number matches one of preset numbers
//     {
//         console.log('Match');
//     } else {
//         console.log('No match found.');
//     }
//     // }

// let animalNames = ['lion', 'tiger', 'birds', 'rodents', 'monkey', 'elephant', 'cheater']

// let userInput = prompt('Enter animal name')

// for (let name of animalNames) {
//     if (animalNames.indexOf(userInput) >=0) {
//         console.log(`You are correct`)
//     }else {
//         console.log(`you are wrong`)
//     }
// }

// let myGuest = ['bayo', 'luke', 'martin', 'oluwa', 'tayo', 'philip',]

// let guestName = prompt('Name').toLowerCase();

// function myFriends() {
//     for (let guest of myGuest) {
//         if (myGuest.indexOf(guestName) >=0) {
//             console.log(`Hello ${guestName} and ${guestName} you welcome, have a nice time!`);
//             break;
//         }else {
//             console.log(`Hello ${guestName} and ${guestName}, you are not invited`);
//         }
//         break;
//     }
// }
// myFriends()
// myFriends()

// let shopping = ['milk', 'bread', 'chesse', 'noddles', 'sugar', 'paste', 'toothbrush', 'fruit juice', 'milo', 'wines'];
// console.log(shopping);
// console.log(shopping[shopping.length -1]);

// shopping[3] = 'biscuit';
// console.log(shopping);
// console.log(shopping.indexOf('grapes'));
// console.log(shopping[7]);
// console.log(shopping.indexOf('wines'));
// console.log(shopping.indexOf('biscuit', 1));

// let veggies = ['potato', 'tomato', 'chillies', 'green-paper'];

// let prefferedVeggie = prompt('Enter veggie')

// function myVegatabelCollections () {
//     if(veggies.indexOf(prefferedVeggie) === -1) {
//         // veggies.pop()
//         veggies.unshift(prefferedVeggie);
//         console.log(`New veggies collection is: ${veggies}`)
//     } else {
//         console.log(`${prefferedVeggie} alreay exist in the veggies collection `)
//     }
// }
// myVegatabelCollections()

// function updateVegetablesCollection(veggies, veggie) {
//   if (veggies.indexOf(veggie) === -1) {
//     veggies.push(veggie);
//     console.log(`New veggies collection is: ${veggies}`);
//   } else {
//     console.log(`${veggie} already exists in the veggies collection.`);
//   }
// }

// const veggies = ["potato", "tomato", "chillies", "green-pepper"];

// updateVegetablesCollection(veggies, "cucumber, and spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
// updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.

// let invittee = prompt('Enter your name').toLowerCase();

// let guest = ['mohammed', 'atiku', 'akume', 'kayode', 'kalu', 'etim',];

// function myGuestList () {
//     // for(let name of guest) {
//         if(guest.indexOf(invittee) >=0) {
//         console.log(`Welcome ${invittee}, access granted`);
//     } else {
//         console.log(`${invittee}, you are not invited access denied`)
//     }
//     // }
    
// }
// myGuestList()

// function myGuest(guest, element) {
//     if(guest.indexOf(element) >=0) {
//         console.log(`${guest}, Welcome`)
//     }
// }
// myGuest(guest, 'atiku');

// var usernumber = prompt('What is your number?');
//     var numbers = ['1', '2', '3'];
//     for(i=0;i<=numbers.length;i++){
//         if (usernumber == numbers[i]){
//         console.log('Match');
//          break;
//         } else if(i==numbers.length) {
//         console.log('No match found.');
//         }
//     }

// let myGuest = ['bayo', 'luke', 'martin', 'oluwa', 'tayo', 'philip',]

// let guestName = prompt('Name').toLowerCase();

// function myFriends() {
//     for (i=0; i<=myGuest.length; i++) {
//         if (guestName == myGuest[i]) {
//             console.log(`Hello ${guestName}, you're welcome do have a nice time!`);
//             break;
//         }else {
//             console.log(`Hello ${guestName}, you are not invited access denied`);
//         }
//         break;
//     }
// }
// myFriends()

// const fruits = ['apple', 'banana'];

// const grains = ['wallnut', 'groundnut']

// const all = grains.concat(fruits)

// console.log(all);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);

const letters = ['a', 'b', 'c', 'd'];

const alphaNumeric = letters.concat(1, [2, 3], 4);

console.log(alphaNumeric);