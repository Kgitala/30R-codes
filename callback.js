
1. What will the output be for the following code?
function test(callback1, callback2) {
 	callback1();
 	console.log("2");
 	callback1();
 	console.log("8");
 	callback2();
 	console.log("9");
 	callback2();
 }
 test(() => console.log("3"), () => console.log("6"));
A)  3 2 3 8 6 9 6



2. What will the following code output?
function calculate(callback) {
 	let result = callback(5, 15, 25);
 	console.log(result);
 }
 calculate(function (x, y, z) {
 	return x * y - z;
 });
A)        50




3. What is the value of result in this code?
function sumValues(callback) {
 	let result = callback(2, 3, 4);
 	console.log(result);
 }
 sumValues((a, b, c) => a + b * c);
A)        14


4. What is printed to the console?
function print(callback) {
 	callback();
 	console.log("Finished");
 }
 print(() => console.log("Started"));
A)        Started Finished





5. What is the output of this function?
function execute(callback1, callback2) {
 	callback1();
 	console.log("Middle");
 	callback2();
 }
 execute(() => console.log("First"), () => console.log("Second"));
A)        First Middle Second





6. What will console.log output in this example?
function operation(callback) {
 	let result = callback(8, 4);
 	console.log(result);
 }
 operation((a, b) => a / b);

C)         2


7. What does the following code print?
function runProcess(callback) {
 	callback();
 	console.log("Running...");
 }
 runProcess(() => console.log("Started"));
 runProcess(() => console.log("In Progress"));
A)        Started Running… In Progress Running…


8. What is the output for this function?
function calc(callback) {
 	let result = callback(10, 5);
 	console.log(result);
 }
 calc(function (x, y) {
 	return x - y;
 });
A)        5




9. What will console.log print?
function getResult(callback) {
 	let result = callback(6, 2);
 	console.log(result);
 }
 getResult((a, b) => a % b);
A)        0




10. What is the value of result in this code?
function compute(callback) {
 	let result = callback(7, 9, 3);
 	console.log(result);
 }
 compute((a, b, c) => (a * b) / c);
A)        21


11. What will the console output be?
function process(callback) {
 	callback();
 	console.log("Processed");
 }
 process(() => console.log("Initializing"));
A)        Initializing Processed





12. What is the value of result printed in this code?
function sum(callback) {
 	let result = callback(12, 8, 4);
 	console.log(result);
 }
 sum((x, y, z) => x + y - z);
A)        16





13. What will the following code output?
function multiply(callback) {
 	let result = callback(3, 5);
 	console.log(result);
 }
 multiply((x, y) => x * y);
A)        15




14. What is the value of result in this function?
function subtract(callback) {
 	let result = callback(9, 4);
 	console.log(result);
 }
 subtract((a, b) => a - b);
B)        5


15. What will the code print?
function execute(callback1, callback2) {
 	callback1();
 	console.log("Step");
 	callback2();
 }
 execute(() => console.log("Start"), () => console.log("End"));
A)        Start Step End



16. What does the following code print?
function sumValues(callback) {
 	let result = callback(2, 4);
 	console.log(result);
 }
 sumValues((x, y) => x + y);
A)        6


17. What is the result printed?
function divide(callback) {
 	let result = callback(20, 4);
 	console.log(result);
 }
 divide((x, y) => x / y);
A)        5



18. What will be the console output for this code?
function showMessage(callback) {
 	callback();
 	console.log("Message shown");
 }
 showMessage(() => console.log("Alert!"));
A)        Alert! Message shown


19. What does the following code output?
function calculateResult(callback) {
 	let result = callback(8, 2, 1);
 	console.log(result);
 }
 calculateResult((a, b, c) => a - b + c);
B)        5


20. What is the value printed for result?
function add(callback) {
 	let result = callback(5, 3);
 	console.log(result);
 }
 add((x, y) => x + y);

B)        8


21. What will the output be for the following code?
function funcA(callback1, callback2) {
 	callback1();
 	console.log("A1");
 	callback2();
 	console.log("A2");
 }

 function funcB(callback) {
 	console.log("B1");
 	callback();
 	console.log("B2");
 }

 funcA(() => funcB(() => console.log("Inside B")), () => console.log("End of A"));

D)        B1 A1 Inside B B2 A2 End of A

22. What will be printed to the console by the following code?
function outerFunc(callback) {
 	console.log("Outer Start");
 	callback();
 	console.log("Outer End");
 }

 function innerFunc(callback) {
 	console.log("Inner Start");
 	callback();
 	console.log("Inner End");
 }

 outerFunc(() => innerFunc(() => console.log("Innermost")));
A)        Outer Start Inner Start Innermost Inner End Outer End



23. What is the result of the following code execution?
function processA(callback1, callback2) {
 	callback1();
 	callback2();
 	console.log("ProcessA Done");
 }

 function processB(callback) {
 	console.log("Start ProcessB");
 	callback();
 	console.log("End ProcessB");
 }

 processA(() => processB(() => console.log("Inside ProcessB")), () => console.log("End of ProcessA"));

D)        Start ProcessB Inside ProcessB ProcessA Done End of ProcessA

24. What will the following code print?
function action1(callback1, callback2) {
 	callback1();
 	console.log("Action 1");
 	callback2();
 }

 function action2() {
 	console.log("Action 2");
 }

 function action3(callback) {
 	callback();
 	console.log("Action 3");
 }

 action1(() => action3(() => console.log("Start")), action2);
A)        Start Action 3 Action 1 Action 2


25. What will be the final result of this code?
function step1(callback) {
 	console.log("Step 1");
 	callback();
 }

 function step2(callback1, callback2) {
 	callback1();
 	console.log("Step 2");
 	callback2();
 }

 step2(() => step1(() => console.log("Inner Step 1")), () => console.log("Inner Step 2"));
A)        Step 1 Inner Step 1 Step 2 Inner Step 2

26. What does this code print to the console?
function first(callback) {
 	console.log("First");
 	callback();
 }

 function second(callback) {
 	console.log("Second");
 	callback();
 }

 function third() {
 	console.log("Third");
 }

 first(() => second(third));
A)        First Second Third



27. What will the following code output?
function alpha(callback1, callback2) {
 	console.log("Alpha Start");
 	callback1();
 	console.log("Alpha Middle");
 	callback2();
 	console.log("Alpha End");
 }

 function beta(callback) {
 	console.log("Beta Start");
 	callback();
 	console.log("Beta End");
 }

 function gamma() {
 	console.log("Gamma");
 }

 alpha(() => beta(gamma), () => console.log("Delta"));
A)        Alpha Start Beta Start Gamma Beta End Alpha Middle Delta Alpha End


28. What is the output for this code?
function run1(callback) {
 	console.log("Run1 Start");
 	callback();
 	console.log("Run1 End");
 }

 function run2(callback1, callback2) {
 	console.log("Run2 Start");
 	callback1();
 	console.log("Run2 Middle");
 	callback2();
 	console.log("Run2 End");
 }

 run2(() => run1(() => console.log("Run1 Inner")), () => console.log("Run2 Inner"));
A)        Run2 Start Run1 Start Run1 Inner Run1 End Run2 Middle Run2 Inner Run2 End


29. What does the following code print?
function firstAction(callback) {
 	console.log("Action 1");
 	callback();
 }

 function secondAction() {
 	console.log("Action 2");
 }

 function thirdAction(callback) {
 	console.log("Action 3");
 	callback();
 }

 firstAction(() => thirdAction(secondAction));
A)        Action 1 Action 3 Action 2



30. What is printed when the following code is executed?
function start(callback1, callback2) {
 	callback1();
 	console.log("Start");
 	callback2();
 }

 function middle(callback) {
 	console.log("Middle");
 	callback();
 }

 function end() {
 	console.log("End");
 }

 start(() => middle(() => console.log("Beginning")), end);

B)        Middle Beginning Start End



31. What will be the output of the following code?
function funcA(callback1, callback2, callback3) {
 	console.log("A1");
 	callback1(() => {
     	console.log("A2");
     	callback2();
  	   console.log("A3");
 	});
 	console.log("A4");
 	callback3();
 }

 function funcB(callback) {
 	console.log("B1");
 	callback();
 	console.log("B2");
 }

 function funcC() {
 	console.log("C1");
 }

 funcA((innerCallback) => funcB(innerCallback), () => console.log("End of B"), funcC);

D)        A1 A2 B1 B2 A4 A3 C1 End of B

32. What will this program print to the console?
function firstStep(callback1, callback2) {
 	console.log("First Step Start");
 	callback1(() => {
     	console.log("First Step Mid");
     	callback2();
 	});
 	console.log("First Step End");
 }

 function secondStep(callback) {
 	console.log("Second Step Start");
 	callback();
 	console.log("Second Step End");
 }

 function thirdStep(callback) {
 	console.log("Third Step Start");
 	callback();
 	console.log("Third Step End");
 }

 firstStep(() => secondStep(() => console.log("Inside Second Step")), () => thirdStep(() => console.log("Inside Third Step")));
A)        First Step Start Second Step Start Inside Second Step Second Step End First Step Mid Third Step Start Inside Third Step Third Step End First Step End


33. What will be printed by the following code?
function alpha(callback1, callback2, callback3) {
 	console.log("Alpha Start");
 	callback1(() => {
     	console.log("Alpha Mid");
     	callback2(() => {
         	console.log("Alpha End");
         	callback3();
     	});
 	});
 }

 function beta(callback) {
 	console.log("Beta Start");
 	callback();
 	console.log("Beta End");
 }

 function gamma() {
 	console.log("Gamma Start");
 	console.log("Gamma End");
 }

 alpha((innerCallback) => beta(innerCallback), (innerCallback) => beta(innerCallback), gamma);
A)        Alpha Start Beta Start Beta End Alpha Mid Beta Start Alpha End Gamma Start Gamma End



B)        Alpha Start Beta Start Beta End Alpha Mid Alpha End Gamma Start Gamma End



C)         Alpha Start Beta Start Alpha Mid Alpha End Beta End Gamma Start Gamma End



D)        Alpha Start Alpha Mid Beta Start Beta End Alpha End Gamma Start Gamma End

34. What is the result of the following code execution?
function outer(callback1, callback2, callback3) {
 	console.log("Outer Start");
 	callback1(() => {
     	console.log("Outer Mid");
     	callback2(() => {
         	console.log("Outer End");
         	callback3();
     	});
 	});
 }

 function middle(callback) {
 	console.log("Middle Start");
 	callback();
 	console.log("Middle End");
 }

 function inner() {
 	console.log("Inner Action");
 }

 outer((cb) => middle(cb), (cb) => middle(cb), inner);
A)        Outer Start Middle Start  Outer Mid Middle Start Outer End Inner Action Middle End



35. What will be the final printed output?
function main(callback1, callback2, callback3) {
 	console.log("Main Start");
 	callback1(() => {
     	console.log("Main Mid");
     	callback2(() => {
         	console.log("Main End");
         	callback3();
     	});
 	});
 }

 function sub1(callback) {
 	console.log("Sub1 Start");
 	callback();
 	console.log("Sub1 End");
 }

 function sub2() {
 	console.log("Sub2 Start");
 	console.log("Sub2 End");
 }

 main((cb) => sub1(cb), (cb) => sub1(cb), sub2);
A)        Main Start Sub1 Start Main Mid Sub1 Start Main End Sub2 Start Sub2 End Sub1 End

n Mid Main End Sub2 Start Sub2 End


