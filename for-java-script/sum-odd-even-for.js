// ************odd numbers**********8
// ------------first way----------
let sum = 0;
// _______-some of each value_________-
// for(let num = 91; num <= 129; num += 2){
//     console.log(num);
//     sum = sum + num;
//     console.log("sum of num", sum);
// }
// _____________sum of total value at last_______________
for(let num = 91; num <= 129; num += 2){
    console.log(num);
    sum = sum + num;
}
console.log("sum of all value", sum);

// -----------------second way-------------
// ___________ sum of each value_________
// for(let num = 91; num <= 129; num++){
//     if(num % 2 === 1){
//         console.log(num);
//         sum = sum + num; 
//         console.log("sum of num", sum);
//     }
// }   
// ___________sum of total value at the end__________
for(num = 91; num <= 129; num++){
    if(num % 2 === 1){
        console.log(num);
        sum = sum + num;
    }
}
// console.log("sum of total num", sum);


        
// ***********88even number*************


// -------------first way----------

// __________sum of all value__________
// for(num = 52; num < 85; num += 2){
// console.log(num);
// sum = sum + num;
// console.log("sum of num", sum);
// }
// _________sum of total value___________
for(num = 52; num < 85; num += 2){
    console.log(num);
    sum = sum + num;
}
console.log("sum of total value", sum);

// -----------second way-------------

// ___________sum of all value___________
// for(num = 51; num < 85; num++){
//     if(num % 2 === 0){
//         console.log(num);
//         sum = sum + num;
//         console.log("sum of all value", sum);
//     }
// }
// ___________sum of total value__________
for(num = 51; num < 85; num++){
    if(num % 2 === 0){
        console.log(num);
        sum = sum + num;
    }
}
console.log("sum of all value", sum); 
   
