// *************odd number***************

// ---------first way---------
// for(let num = 61; num < 100; num +=2){
//     console.log("odd numbers", num);
// }

// --------another way----------
for(let num = 61; num < 100; num++){
if(num % 2 === 1){
    console.log("odd numbers", num);
}
}



// ************even number************

// -----------first way------------
// for(let num = 78; num <= 98; num += 2){
//     console.log("even number", num);
// }

// ----------another way-----------
for(let num = 78; num <= 98; num++){
    if(num % 2 === 0){
        console.log("even number", num);
    }
}