// *****************odd numbers*****************
// ______________first way______________________
// let num = 81;
// let sum = 0;
// ----------sum of each value--------------
// while(num <= 131){
//     console.log(num);
//     sum = sum + num;
//     console.log("sum of", sum);
//     num +=2
// }
// ------------or total sum at the ends----------
// while(num <= 131){
//     console.log(num);
//     sum = sum + num;
//     num +=2
// }
// console.log("sum of", sum);


//______________ another way_____________________
// let number = 81;
// let total = 0;
// -------------sum of each value----------------
// while (number <= 131) {
//     if (number % 2 === 1) {
//         console.log(number);
//         total = total + number;
//         console.log("sum of number", total);
//     }
//     number++
// }
// --------------total sum at the ends---------------
while(number <= 131){
    if(number % 2 === 1){
        console.log(number);
        total = total + number;
    }
    number++
}
console.log("sum of number", total);



// ****************even number*******************

// _________________first way_________________
// let n = 206;
// let t = 0;
// ------------sum of each value-----------------
while(n < 311){
    console.log(n);
    t = t + n;
    console.log("sum of n", t);
    n += 2
}
// ---------------total sum at the ends-------------
while(n < 311){
    console.log(n);
    t = t + n;
    n += 2
}
console.log("total sum", t);

// ________________another way__________________________
let n = 206;
let t = 0;
// ------------sum of each value-----------------
while(n < 311){
    if(n % 2 === 0){
        console.log(n);
        t = t + n;
        console.log("sum of n", t);
    }
    n++
}
// ---------------total sum at the ends-------------
while(n < 311){
    if(n % 2 === 0){
        console.log(n);
        t = t + n;
    }
    n++
}
console.log("sum of n", t);   
     






