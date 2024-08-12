let isLoggedin = true;
console.log("Is the user logged in:", isLoggedin);

const products = ["Redbull", "Whole Milk", "Protein Powder", "Pre-Workout", "Creatine Supplements", "Running Shoes", "Deodorant"];
for (const product in products) {
    console.log("Products Available:", products[product]);
}

let PersonalCart = ["Redbull", "Redbull", "Running Shoes", "Pre-Workout", "Deodorant"];
for (let items in PersonalCart) {
    console.log("Current shopping List:", PersonalCart[items]);
}

let Redbull = 3.49
let RunningShoes = 89.95
let PreWorkout = 29.99
let Deodorant = 7.79

let Total = 0

for (let item in PersonalCart) {
    if (PersonalCart[item] === "Redbull"){
        Total += Redbull
    }
    if (PersonalCart[item] === "Running Shoes") {
        Total += RunningShoes
    }
    if (PersonalCart[item] === "Pre-Workout") {
        Total += PreWorkout
    }
    if (PersonalCart[item] === "Deodorant") {
        Total += Deodorant
    }
    console.log("Grand Total:", Total);
}