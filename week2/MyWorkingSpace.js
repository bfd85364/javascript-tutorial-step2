// NAME: 
// DATE:  
// WEEK:
// EXERCISE/ASSIGNMENT: 



function Exercise1() {
	print("***************");
	print("***************");
	print("***************");
	print("***************");
}

function Exercise2() {
	print("********************");
	print("*                  *");
	print("*                  *");
	print("********************");
}

function Exercise3() {
	let name =prompt("enter your name!");
	let WelcomeMesseage = "greeting!!!" + name;
	print (WelcomeMesseage);
}

function Exercise4() {
	let num1= 5;
	let num2= 12;
	let num3= 80;
    let num4 =7;
	let num5 =9;
	let result1 = (num1 + num2 + num3 - num4);
	let result2 = (result1/num5);
	
	print(result2);
}

function Exercise5() {
	clearPrintSpace()
	let num1= 5;
	let num2= 12;
	let num3= 80;
    let num4 =7;
	let num5 =9;
	let result1 = (num1 + num2 + num3 - num4);
	let num6 = parseInt (prompt("Enter any number!"));
	let result3 = (result1 + num6);
	print(result3);
}

function Exercise6() {
	clearPrintSpace()
	let num1 =parseInt (prompt("please, enter your year of the birth"));
	let num2 = 2050;
	let result4 = (num2 - num1);
	print("this your age when the 2050 year=", result4);
}

function Exercise7() {
var rand1 = Math.floor(Math.random()*10)+1;
var rand2 = Math.floor(Math.random()*10)+1;
var rand3 = Math.floor(Math.random()*10)+1;
let result5 =parseInt(rand1 + rand2 + rand3);
 print(rand1,"+",rand2,"+",rand3);
 print("=",result5);
}

function Exercise8() {
	clearPrintSpace()
	let yearofBirth = prompt("please input the year of birth");
	let currentAge = 2024 - yearofBirth;
	let agedividedBy3 = currentAge/3;
	print("your age is",agedividedBy3);
	
}

function Exercise9() {
	clearPrintSpace()
	
}

//Clear working space
function clearPrintSpace() {
	clearAll();
}
