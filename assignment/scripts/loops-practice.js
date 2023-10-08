console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5'); 
//I will need to change the 'condition' of the loop.
for (let i = 0; i < 6; i++) {
  console.log(i);
  
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
//first I will try to add a '2<' to the condition.
//for (let i = 0; 2 < i < 6; i++) {  console.log(i);} //well that produced an infinite loop.
for (let i = 3; i < 6; i++) {
  console.log(i);
}
//well that worked but I wonder if there is a way to keep i as a starting value of zero and log only once the value is between the range of 3 to 5? 


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
//I would change the increment to reflect every other number.
for (let i = 2; i < 12; i += 2) {
  console.log(i);
}
//forgot to use '+=' instead of just + and got an infinite loop.
//let i = 'test'; console.log(i,); //I just wanted to figure out if I could declare an 'i' variable outside these for statements,
// if I'm not mistaken the for statements create a sort of temporary variable that only exists for those lines of code.

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for (someStar of stars) {
  console.log('a list of stars:', someStar);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
//let variable = stars[0]
//const max = 5
//while(variable < max) {
//  console.log('a star in the sky', variable); stars [0++];}

//I'm super stumped on how to use an existing array within a while loop

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let i = 0
const max = 5
while(i <= max) {
  console.log('in a while loop', i); i++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
i = 10
const min = 5
while(i >= 5) {
  console.log('suspended countdown', i); i--;
}