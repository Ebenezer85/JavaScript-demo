// let age = 30;

// var year = 2023;

// console.log(age);
// console.log(year);

// age = 35;
// console.log(age);

// // console.log(age ,year);

// //using the const keyword.

// const mile = 50;
// const points = 1000;

// console.log(mile);
// // document.write(points);

// //Strings

// let firstName = 'John';
// let lastName = 'Eze';
// let color = 'Black';

// //String concatenation
// let fullName = firstName + ' ' + lastName + ' ' + 'is' + ' ' + color;

// console.log(fullName);

// // Getting String character

// let email = 'marion@gmail.com'
// console.log(email);
// console.log(email[6]);

// //String Length
// console.log(email.length);
// console.log(fullName.length);

// //String Method
// console.log(email.toUpperCase());
// let game = fullName.toLowerCase()
// console.log(game);

// let index = fullName.indexOf('k');
// console.log(index);

// //Math operation
// //+, -, /, *, %, **, ++, --, +=, -=, *=, %=
// //order of operation: B I D M A S 

// let results = 5 * (10-3)**2;
// console.log(results);
// //Bracket Open, **, /, *, +, -

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// let result = pi*radius**2;
// radius = 30;
// console.log(result);

// let num1 = 10;
// let num2 = 30;
// let num3 = 7
// let num4 = 2


// let addition = num1 + num2;
// let subtraction = num2 - num1;
// let division = num2 / num1;
// let multiplication = num1 * num3;
// let remainder = num2 % num3;
// let power = num3 ** num4;


// console.log(addition);
// console.log(subtraction);
// console.log(division);
// console.log(multiplication);
// console.log(remainder);
// console.log(power);

// let score = 30;
// score++
// console.log(score);

// let decrement = 25
// decrement--
// console.log(decrement);

// let flight = 70;
// flight += 30;  //+= operator takes the value 70 and adds 30 to it.
// console.log(flight);

// let soccer = 15;
// soccer -= 5
// console.log(soccer);

// let cars = 25;
// cars *= 3;
// console.log (cars);

// let animals = 5;
// animals **= 2;
// console.log(animals);

// let equipment = 25;
// equipment %= 7;
// console.log(equipment);

// let ball = 18;
// ball /= 4;
// console.log(ball);

// //number concatenation
// const title = 'JavaScript Basics for Beginners';
// const author = 'Mario';
// const years = 2019;
// let likes = 1000;

// let output = 'The Book called ' + title + ' ' + 'Written by ' + author + ' ' + 'and published in ' + 'year ' + years + ' ' + 'already has ' + likes + ' ' + 'likes.';

// console.log(output)

// //Template string way using back tick ` instead of quote $ and curley brackets {} are used to capture the variables. This is the best way for concatenating long strings

// let tick = `The Book called ${title} Written by ${author} and Published in year ${year} already has ${likes} likes.`;
// console.log(tick);

// //ARRAYS

// let cohorts = ['Dami', 'Daewoo', 'Ferrari', 'Isreal', 'Ayo', 'Ebenezer', 'Adam', 'Isaac', 'Pylot', 'Josh'];
// console.log (cohorts);

// let ages = [18, 20, 34,30, 25, 27, 19, 22, 26, 23];
// console.log(ages);

// let random = [20,25,30,35,40,45,50];
// console.log(random);

// //array length

// console.log(cohorts.length);

// //array methods

// // let cohort = cohorts.join(',');
// // let cohort = cohorts.indexOf('Ebenezer');
// // let cohort = cohorts.concat(['Huseein', 'indifreke']);
// // let cohort = cohorts.push('Prof');  //Returns the length of the new array
// let cohort = cohorts.pop();  //Removes the last of the array


// console.log(cohort)

// //Undefined
// let roll;

// console.log(roll, roll+3, `the roll is ${roll}`);

// //Null an intentional lack of value

// let rolls = null;

// console.log(rolls, rolls+3, `the roll is ${rolls}`);

// //BOOLEANS
// //They are special values and used to evaluate conditions in JavaScript.

// console.log(true, false, 'true', 'false');

// //Methods can return Boolean

// let emails = 'e.ebenezer@cen-logistics.com';

// console.log(emails.includes('@'));
// console.log(emails.includes('!'));

// let members = ['Ebenezer', 'Nnaemeka', 'Muna'];
// let all = members.includes('Tayo');
// console.log(all);

// //comparison operators

// //A. Abstract or loose equalities
// //==, !=, >, <, >=, <=

// let sex = 'male'
// let myAge = 40;

// console.log (sex == 'male');
// console.log(myAge == 40);
// console.log(sex == 'female')
// console.log(myAge == 35)
// console.log(sex != 'male');
// console.log(myAge != 40);
// console.log(myAge != 35);
// console.log(myAge > 39)
// console.log(myAge < 60)
// console.log(myAge >= 40)
// console.log(myAge <= 60)
// console.log(sex == 'Male')
// console.log(sex > 'female') //this is true because m is a later alphabeth than f
// console.log(myAge == '40'); //This will evaluate to true because only the value is considered and not the data type.

// //B. strict equalities
// //===, !==
// console.log(myAge === '40'); //false 
// console.log(myAge === 40); //true
// console.log(myAge !== 40); //false
// console.log(myAge !== 30); //true
// console.log(myAge == 30);

