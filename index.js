"use strict";
// Develop a program that calculates and prints the sum of the first n even 
//numbers using a for loop.
let sum = 0;
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log("sum of Even number", sum);
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}
//Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 != 0) {
        console.log(array1[i]);
    }
}
//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius) {
    let area = 3.14 * 2 * radius;
    return area;
}
var areaCircle = 25;
let totalArea = areaOfCircle(areaCircle);
console.log(totalArea);
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let arrayOfGrades = [98, 40, 77, 38, 85, 30];
let i = 0;
for (let i = arrayOfGrades.length - 1; i >= 0; i--) {
    if (arrayOfGrades[i] < 50) {
        arrayOfGrades.splice(i, 1);
        console.log(arrayOfGrades);
    }
}
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let arrayNumbers = [1, 3, 5, 7, 9, 10, 22, 25, 88, 100, 234, 89, 75];
let max = Math.max(...arrayNumbers);
console.log(max);
