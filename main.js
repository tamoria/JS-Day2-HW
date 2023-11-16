//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(person) {
    for (let foodType in person) {
        if (foodType !== 'shakes') {
            if (Array.isArray(person[foodType])) {
                console.log(`${foodType}:`);
                person[foodType].forEach(food => console.log(`  - ${food}`));
            } else {
                console.log(`${foodType}: ${person[foodType]}`);
            }
        }
    }

    if (Array.isArray(person.shakes)) {
        console.log('shakes:');
        Object.values(person.shakes[0]).forEach(value => {
            console.log(`  - ${value}`);
        });
    }
}

favoriteFoods(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
const Person = function(name, age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
this.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Create another arrow function for the addAge method that takes a single parameter
this.incrementAge = () => {
    this.age += 1;
    };
};

const person1 = new Person("Norman", 33);
const person2 = new Person("Nora", 38);


person1.printInfo();
person2.printInfo();

// Increment age by 3 years
person1.incrementAge(); 
person1.incrementAge(); 
person1.incrementAge(); 


person1.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const lengthOfString = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve(true);
        } else {
            reject(false);
        }
    });
};

lengthOfString("Hippopotamus")

.then((result) => {
    console.log('Big word');
})

.catch((result) => {
    console.log('Small Number');
});

// Codewars problem 1: Given the triangle of consecutive odd numbers: Calculate the sum of the numbers in the nth row of this triangle.

/* Problem solved using Python:
def row_sum_odd_numbers(n):
    first_number = n * (n - 1) + 1

    row_sum = sum(range(first_number, first_number + 2 * n, 2))
    
    return row_sum
*/

// Problem solved using JavaScript

function rowSumOddNumbers(n) {
  
    const firstNumber = n * (n - 1) + 1;
  
    const rowSum = Array.from({ length: n }, (_, index) => firstNumber + 2 * index)
                      .reduce((sum, num) => sum + num, 0);
  
    return rowSum;
  }

  console.log(rowSumOddNumbers(2))

/* Codewars problem 2: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.
*/

function duplicateCount(text){
    const distinctChar = {};
    const lowerCaseText = text.toLowerCase();
    for (let i of lowerCaseText) {
      if (/^[a-z0-9]$/.test(i)) {
        distinctChar[i] = (distinctChar[i] || 0) + 1;
      }
    }
    
    let duplicates = 0;
    for (let i in distinctChar) {
      if (distinctChar[i] > 1) {
        duplicates++;
      }
    }
    
    return duplicates;
}

console.log(duplicateCount('I love ice cream!'))
