// Exercise 1:

// function Filtering(arr) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             arr2.push(arr[i]);
//         }}
//     return arr2;
// }
// arr = [1, 2, 6, 2, 4, 3, 5, 1, 7]
// Filtering(arr)


// ****** Another way *******

// const Filtering = arr => arr.filter(num => num % 2 === 0);
// console.log(Filtering([1, 2, 6, 2, 4, 3, 5, 1, 7]));








// Exercise 2 :

// function largestNumber(arr) {
//     let largestNumber = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largestNumber) {
//             largestNumber = arr[i];
//         }
//     }
//     return largestNumber;
// }
// arr = [1, 9, 6, 2, 4, 3, 5, 1, 7]
// console.log(largestNumber(arr));


// ****** Another way *******

// const largestNumber = arr => Math.max(...arr);
// console.log(largestNumber([1, 9, 6, 2, 4, 3, 5, 1, 7]));









// Exercise 3 :

// function ReverseAString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// let string = 'Adham'
// console.log(ReverseAString(string));


// ****** Another way *******

// const ReverseAString = str => str.split('').reverse().join('');
// console.log(ReverseAString('Adham'));








// Exercise 4 :

// function RemoveDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }
// arr = [1, 4, 6, 2, 4, 3, 2, 1, 7]
// console.log(RemoveDuplicates(arr));



// ****** Another way *******

// const RemoveDuplicates = arr => [...new Set(arr)];
// console.log(RemoveDuplicates([1, 4, 6, 2, 4, 3, 2, 1, 7]));