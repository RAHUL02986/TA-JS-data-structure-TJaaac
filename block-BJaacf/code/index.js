// 1. Create an array named numbers and store 5 number values in it
let numbers = [1,2,3,4,5];

// 2. Calculate the sum of array items and print it to the console using console.log()

sum = 0;
for(let number of numbers){
    sum += number;
    console.log(sum);
}
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(sum/numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber = numbers[0];
for(let number of numbers){
    if(number > highestNumber){
        highestNumber = number;
    }
}
console.log(highestNumber);

// 5. Find the lowest number in the array and print it to the console using console.log()
  let lowerNumber = numbers[0];
  for (let number of numbers){
    if (number < lowerNumber) {
        lowerNumber = number;
    }
  }
  console.log(lowerNumber);
// 6. Find the even numbers in the array and print them to the console using console.log()
 let even = [];
 for (let number of numbers){
    if(number % 2 === 0){
     console.log(even.push(number, "even"));
    }
 }
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for (let number of numbers){
   if(number % 2 !== 0){
    console.log(odd.push(number, "odd"));
   }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let div = [];
for (let number of numbers){
    if( number % 5 === 0) {
        console.log(div.push(number, "divisible by 5"));
    }
}
// 9. Log all the element of the array one by one
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// 10. Find all the number in the array that is divisible by 3
let divide = [];
for(let number of numbers){
    if(number % 3 === 0){
        console.log(divide.push(number, "divisible by 3"));
    }
}