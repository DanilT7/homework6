// 1.Вивести на сторінку в один рядок через кому числа від 10 до 20.

let str = '';

for(let i = 10;i <= 20;i++) {
    str = str + ' ' + i;
}

console.log(str.trim());

// 2.Вивести квадрати чисел від 10 до 20.

// for(let i = 10;i <=20;i++) {
//     console.log(`${i}^2=${i * i}`)
// }

// console.log(str);

// 3.Вивести таблицю множення на 7.

// for (let i = 1;i <= 10; i++) {
// console.log(` ${i}*7=${i * 7}`);
// }

// 4.Знайти суму всіх цілих чисел від 1 до 15.

// let sum = 0;

// for(let i = 1;i <=15;i++) {
//     sum = sum + i;
// }

// console.log(sum);

// 5.Знайти добуток усіх цілих чисел від 15 до 35.

// let mul = 1;
// for(let i = 15;i <=35;i++) {
//     mul = mul * i;
// }

// console.log(mul)

// 6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// let sum = 0;

// for(let i=1;i <= 500;i++) {
//    sum = sum + i; 
// }

// console.log(sum/500);

// 7.Вивести суму лише парних чисел в діапазоні від 30 до 80.

// sum = 0;

// for(let i=30;i <= 80;i++) {
//     if(i % 2 == 0) {
//        sum=sum+i;
//     }
// }

// console.log(sum);

// 8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// for(let i = 100;i <= 200;i++) {
//     if(i % 3 == 0) {
//         console.log(i)
//     }
// }

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

// let number = prompt('Enter number');

// for(let i=1;i <= 10000;i++) {
//     if(number % i == 0) {
//         console.log(i);
//     }
// }

// 10.Визначити кількість його парних дільників.

// let number = prompt('Enter number');

// let amount = 0;

// for(let i=1;i <= 10000;i++) {
//     if(number % i == 0) {
//         if(i % 2 == 0) {
//             console.log(i);
//             amount = amount + 1;
//         }
        
//     }
// }
// console.log(`amount is ${amount}`);

// 11. 

// let number = prompt('Enter number');

// let sum = 0;

// for(let i=1;i <= 10000;i++) {
//     if(number % i == 0) {
//         if(i % 2 == 0) {
//             console.log(i);
//             sum = sum + i;
//         }
        
//     }
// }
// console.log(`sum is ${sum}`);

// 12.Надрукувати повну таблицю множення від 1 до 10.

// for(let i = 1;i <= 10;i++) {
//     for(let j = 1;j <=10;j++) {
//         console.log(`${i}*${j}=${i*j}`)
//     }
// }