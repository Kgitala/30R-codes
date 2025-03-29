const person = { 
    name: "John Doe", 
    age: 30, 
    address: { 
    city: "New York", 
    country: "USA" 
    }, 
    hobbies: ["Reading", "Traveling"] 
};


let {name : fullName, age, address:{city, country = "Unknown"},hobbies} = person;
console.log(fullName, age, city);
let [a,,] = hobbies;
let firstHobby = a;
console.log(firstHobby);


const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
let [c,d,...rest] = fruits;
[c,d]=[d,c];
console.log(c,d);


function sumNumbers(...a){
    return a.reduce( (sum,next) => sum+next );
}
console.log(sumNumbers(1, 2, 3, 4)); 
console.log(sumNumbers(10, 20, 30));


const user = { name: "Alice", age: 25 }; 
const job = { title: "Developer", company: "TechCorp" };
let userProfile = {...user, ...job, experience : "2 years"};
console.log(userProfile);


const numbers = [1, 2, 3, 4, 5];
let arr = [...numbers];
arr.unshift(0);
arr.push(6);
console.log( arr);