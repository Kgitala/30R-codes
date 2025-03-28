// Question - 1
// Arrow function is one of different types of 
// functions present in javascript . The basic 
// syntax difference of arrow function from a 
// traditional function expression is it doesn't 
// have a function keyword and it consists of arrow 
// symbol.


// anonymous
var anony = function(){
    // statement
}

// arrow
var arrow = () => {
    statement
}



// Question - 2
var add = (a, b) => a+b
var add1 = (a,b) => {
    return a+b
}
console.log(add1(6,4))   //explicit 
console.log(add(2,10))  //implicit 


// Question - 3
var square = n => n*n
console.log(square(5))


// Question - 4
// if the arrow function consists of only one parameter 
// then that parameter need not be enclosed in paranthesis.



// Question - 5
var cube = n => n*n*n
console.log(cube(3))


var cube1 = n => {
    return n**3
}
console.log(cube1(2))


// Question - 6
var sub = (a,b) => a-b
console.log(sub(10,4))


var sub1 = (a,b) => {
    return a-b
}
console.log(sub1(10,10))

// Question - 7
var res = () => "Hello, World!"
console.log(res())