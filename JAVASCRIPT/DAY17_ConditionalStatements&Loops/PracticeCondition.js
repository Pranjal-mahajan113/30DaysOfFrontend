// // ======= Q1.VOTER===========
// let age = Number(prompt("Enter your age "));

// if (isNaN(age)) {
//     console.log("Wrong Input");
// }

// else if (age >= 18) {
//     console.log("Your eligible to vote")
// } else {
//     console.log("Your not aligible for vote")
// }



//===========Q2.Shop Discount======
// let amount = Number(prompt("what is final amount"));

// if (amount > 0 && amount <= 5000) {
//     console.log(amount);
// }
// else if (amount > 5000 && amount <= 7000) {
//     console.log(amount - Math.floor((5 * amount) / 100));
// }
// else if (amount > 7000 && amount <= 9000) {
//     console.log(amount - Math.floor((10 * amount) / 100));
// }
// else if (amount > 9000 ) {
//     console.log(amount - Math.floor((20* amount) / 100));

//}
////Q2 another way///

let amount = Number(prompt("what is final amount"));
let disc = 0;

if (amount > 0 && amount <= 5000) {
    disc = 0;
}
else if (amount > 5000 && amount <= 7000) {
    disc = 5;
}

else if (amount > 7000 && amount <= 9000) {
    disc = 10;

}
else if (amount > 9000) {
    disc = 20;


}
console.log(amount - Math.floor((20 * amount) / 100));



//=====Q3 Electricity bill =====
let unit = Number(prompt("Enter elctricity Bill"));