// დავალება 1 შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას 
// და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// function sum (...numbers) {
//     let newSum = 0;
//     for (let item of numbers) {
//         if (item > 0) {
//             newSum = newSum + item;
//         }
//     }
//     console.log(newSum);
// }
// sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// function sum (...numbers) {
//     let newSum =0;
//     for (let item of numbers) {
//         if (item > 0) {
//             newSum += item;
//         }
//     }
//     return (newSum);
// }
// let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result);
// დავალება 2.	ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:

// sum(10, 50, 6, 7, 8, 11, 6, 3, 9);

// function sum(...args) {
//     let numberSum = 0;
//     for (let item of args) {
//         numberSum += item;
//     }
//     console.log(numberSum);
// }

// დავალება 3.	ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') 
// თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

// let user = {
//   firstname: 'giorgi',
//   lastname: 'saakadze',
//   age: 32,
//   isloggedin: true
// }

// function printName(obj) {
//     if (obj.isloggedin) {
//         return obj.firstname + ' ' + obj.lastname;
//     } 
//     return false;
// }
// let result = printName(user);
// console.log(result);


// დავალება 4.	შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი 
// და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

// function getMax(...numbers) {
//    let maxValue = 0;
//    for (let item of numbers) {
//     if (item > maxValue) {
//         maxValue = item
//     }
//    } 
//    return maxValue;
// }
// let result = getMax(9, 15, 27, 151, 133, 19, 48, 35);

// console.log(result);

// დავალება 5.	მოცემული მასივიდან გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;

// let array = [1, 2, 4, 10, 34, 5, 7, 87];

// for (let item of array) {
//    if (item > 0 && item < 10) {
//     console.log(item);
//    }
// }

// დავალება 6.	მოცემული მასივიდან ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let item of numbers) {
//     if (item == 5) {
//         break;
//     }
//     console.log(item);
// }

