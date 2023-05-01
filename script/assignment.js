//write a function that takes two numbers as arguments and returns the larger number. If the numbers are equal return 'Equal

//write function with parameter
//write conditinal statement
//output result
//call the function with arguments


function numbers(num1, num2) {
   if(num1 === num2) {
    console.log(`Equal`)
   }else {
    console.log(Math.max(num1, num2))
   }
}
numbers(30, 45);
numbers(30, 30);

//QUESTION 2
/*Write a function that takes an array of numbers as an argument and returns the sum f all the numers in the array.*/
//Algorithms
// >> write the function
// >> declare the sum variable
// >>write a for loop code
// >> return the sum variable
// >> call the function with array of numbers.

function sumArrays(numbers) {
   let sum = 0;
   for (i =0; i < numbers.length; i += 1) {
      sum += numbers[i];
   }
   return sum
}
console.log(sumArrays([1, 4, 5, -2, 8, 10]));

/*Write a function that takes a string as an argument and returns the length of the string. If the string is empty, return "Empty String".*/

//Algorithms
// >>write the function
// >>output length of the String
// >>call the cunction with the string

function stringLength (string) {
   if (string.length >=0){
      console.log(string.length);
   }else if (string.length === null) {
      console.log ('Empty String')
   }
      
}
   
stringLength('I am grateful to God for life, family and friends.')
stringLength('')



