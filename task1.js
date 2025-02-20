// Q1
function sayHello(){
    console.log("Hello, World!")
}
sayHello()


// Q2
function displayWarning(){
    console.log("Warning! System Overload!")
}
displayWarning()


// Q3
function printStatus(){
    console.log("System Status : Active")
}
printStatus()


// Q4
function initialize(){
    console.log("Initialization Complete.")
    shutDown()
}
function shutDown(){
    console.log("System shutting down...")
}
initialize()


// Q5
function startProcess(){
    console.log("Process started.")
    endProcess()
}
function endProcess(){
    console.log("Process ended")
}
startProcess()


// Q6
function greetUser(userName){
    console.log("Hello, ${userName}!")
}
greetUser('Madhu')
greetUser('Madhavika')


// Q7
function calculateSum(num1, num2){
    console.log(num1+num2)
}
calculateSum(1,2)
calculateSum(22,45)


// Q8
function countDown(){
    for(let i=5; i>=1;i--){
        console.log(i)
    }
}
countDown()


// Q9
function checkEvenodd(num){
    if (num%2 ==0){
        console.log("Even")   
    }
    else{
        console.log("Odd")
    }
}
checkEvenodd(5)
checkEvenodd(4)


// Q10
function beginSession(){
    console.log("Session Started")
    endSession()
}
function endSession(){
    console.log("Session Found")
}
beginSession()