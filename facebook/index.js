// // write a code that checks weather they are prime number 
// function isprime(n) {
//     if (n<=1) return false; // nnumber lessthan or equal 1 are not prime
     
//       if (n==2) return true; 
//       for (let i = 2; i <= Math.sqrt(num); i++) //check divisor from 2 to the square root of d number
//         if (num % i == 0) return false; // if divisible by any number
//    return true; if //no divisors found
// }
//  function checkmultiplicationprime(num1,num2) {
//     let result = num1 * num2;
//     let check = isprime(result);
//     if(check == true) {
//         console.log("result is a prime number")
//     }else{
//         console.log("result is not a prime number")
//     }
//  }

//  write a function that returns the biggest of 2 numbers?
//  function  maxoftwo(number1, number2) {
//     if(number1 > number2) {
//         return number1
//     }else {
//         return number2;
//     }
// }
// // console.log(maxoftwo(5,8));

// function calculatecircleArea (radius) {
//     if (radius <= 0) {
//         return "radius must be a postive number";
//     }
//     return Math.PI * Math.pow(radius,2);
// }
// // console.log("the araea of the circle is",calculatecircleArea(3));

// function findsmallestNumber(num1, num2, num3) {
//     return Math.min(num1, num2, num3);
// }
// // console.log(findsmallestNumber(10, 5, 8));

// function isDivisibleBy3or5(number) {
//     if (number % 3 === 0 && number % 5 ===0) {
//         return `${number} is divisible by both 3 and 5`;
//     }else if (number % 3 === 0) {
//         return `${number} is divisible by 3`;
//     }else if (number % 5 === 0) {
//         return `${number} is divisible by 5`;
//     }else {
//         return `${number} is not divisble by 3 or 5`;
//     }
// }
// // console.log(isDivisibleBy3or5(15));
// // console.log(isDivisibleBy3or5(10));


// function aNumberisDivisibleBy3And5(number) {
//     return number % 3 === 0 && number % 5 === 0;
// }
// // console.log(aNumberisDivisibleBy3And5(15));

// function getStringLength(str){
//     if (typeof str != "string") {
//         return "please provide a valide string";
//     }
//     return str.length;
// }
// let fruits = ["apple"," mango", "orange", "berry","banana", "carrot", "cucumber","watermelow" ,"guava", "coconut" ];
// for (const fruit of fruits) {
//     console.log(fruit);
// }
// // step 1: create an array of favorite foods 
// let favoritefoods = ["jollof Rice", "pasta", "oha soup","fried chicken", "fried yam"];

// // print each food indiviually
// favoritefoods. forEach(food=>  console.log(food));

// // add a new favorite food at the end and the beginning of the aray
// favoritefoods. push("goat meat"); add to the end
// favoritefoods. unshift("egg sauce");

// // remove the secound item from the array
// favoritefoods .splice(1,1);
// console.log("after removing secound item:", favoritefoods);

// find the index of any specific food in the array 
// let foodtofind  = "pasta";
// let index = favoritefoods. indexOf(foodtofind);
// console.log(`${foodtofind} ia at index:`, index);

// // check if "pizza" exist in the arrray
// let haspizza = favoritefoods. includes("pizza");
// console.log("does the array contain pizza?",haspizza);

// // get the last item dynamically
// let lastitem = favoritefoods[favoritefoods.length - 1];
// console.log("last item in the array:", lastitem); 



// // double each number in the array using the .map() method 
//  let numbers =[2, 4, 6, 8];
//  let doublenumbers = numbers. map(num = num * 2);
//  console.log("doubled numbers:", doublednumbers);

// //  sum all numbers in the array using .reduced() 
// let sum = numbers. reduce((acc, num) = acc + num, 0 );
// console.log("sum of numbers:", sum);

// // sort the array in the descending 
// let sortedDescending = [... numbers] .sort((a, b) b-a);
// console.log("sorted in Descending order:" sortedDescending);

// // sort the array of names alphabetically 
// let names = ["soft", "kingsley", "ifechukwu", "mathew"];
// let sortedNmaes = [... names] .sort();
// console.log("sorted Names Alphabetically:", sortedNmaes);

// // merge both arrays into one 
// let mergedArray = [... numbers, ...names]
// console.log("merged Array:", mergedArray);

// function buyfood(callback){
//     console.log("order is being prepared");
//     setTimeout(() => {
//         console.log("order is ready");
//         callback()
//      }, 50000 );
    
// } 
// function notifyCustomer() {
// console.log("hey! come pick your order")
// }
// buyfood(notifyCustomer);
  
const soft = {
    title: "yes",
    name: "Alhajisoft",
    complexion: "fair",
    married: "yes",
    occupation: "software enginer",
     puntual: "on time",
     nationality: "Nigeria",
     tribe : "igbo",
     numberofkids: "5",
     countriesvisited: "3",
     Address: {
        street: "no 12 tokumbo street",
        state: "imo",
        town: "awommamma",
        country: "Nigeria",
     }
}
//delete soft.tribe
// console.log(soft.Address.town)
// soft.married = "no"
// for (let key in soft) {
//     console.log(key+":" + soft[key])
// }
// console.log(soft.title);
// console.log(soft["married"]);

const Alhajisoft = {
    name:"soft",
    age: "40",
    IsEployed: "false",
    skills: ["java script", "html", "css", "react js", "node js"],
    Address: {
        streetnumber: "no 17 ",
        streetname: "power mkie",
        city: "awka",
        localgovt: "awka-south",
        state: "anambra",
        country: "nigeria",
    },
    greet: function() {
         console.log("Good morning sir")
    }
}


// console.log(Alhajisoft.name, Alhajisoft.age)
const newSoft = {...Alhajisoft, email: "email@email", skills: [...Alhajisoft.skills, "Typescript", "Python"]}


// console.log(newSoft)

const {streetnumber, streetname, localgovt, city, state, country} = newSoft.Address

console.log(`${streetnumber} ${streetname}${localgovt} ${city} ${state} ${country} 
      `)



newSoft.greet()
