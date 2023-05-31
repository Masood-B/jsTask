let first_number1 = 15; 
let second_number1 = 17;
let flip;
flip = first_number1; 
first_number1 = second_number1; 
second_number1 = flip;
console.log(first_number1); 
console.log(second_number1);

let first_number = 15; 
let second_number = 17;
[first_number, second_number] = [second_number, first_number]
console.log(first_number); 
console.log(second_number);

let first_number2 = 15; 
let second_number2 = 17;
first_number2 = first_number2 + second_number2; 
second_number2 = first_number2 - second_number2;
first_number2 = first_number2 - second_number2; 
console.log(first_number2);
console.log(second_number2);