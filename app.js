console.log("Welcome here!!!")

//I. Variables and Datatypes

//A. Q and A

//1. How do we change the value of a variable?
// We can assign new value to variable simply by doing var blah = "Something new";

//2. How do we assign an existing variable to a new variable?
// simply change the name of the variable.

//3. Remind me, what are declare, assign, and define?
// when you declare a variable, you are giving it the variable property. i.e saying var blah = or let blah =
//when you assign a variable, you are giving it a name.
//when you define a varibale, you give it the value.

//4. What is pseudocoding and why should you do it?
// psuedocoding is the process of solving a coding problem by writing out (not coding),
// how you plan on solving the problem.

//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//About 75% thinking, planning and psuedocoding. actual coding is only about 25%.


//B. Strings
//1.
    var firstVariable = "Hello World";
    firstVariable = 239;
    secondVariable = "This is good stuff";
    var firstVariable = secondVariable;
    

    console.log(firstVariable);
    //prints out "This is good stuff"

//2. 
let yourName = "Binod";

console.log("Hello, my name is " + yourName);


//C. Booleans
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  console.log(true !== false);
  console.log(false == false == false == false == false == false == true);
  //what the hell just happened.
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a < b < c);
  console.log(a + a < d);
  console.log(48 == '48');

//D. The farm
  var animal = "cow";
  if(animal == "cow"){
      console.log("Mooo")
  }
  else{
      console.log("Hay!!! You're not a cow");
  }

//E. Driver's Ed
var personAge = 30;
if(personAge >= 16){
    console.log("Here are the keys");
}
else{
    console.log("Sorry, you're too young");
}



//II. Loops
//A. The Basics
//1.
for(let i = 0; i < 11; i++){
    console.log(i);
}
//2. 
for(let i = 10; i < 401; i++){
   console.log(i);
}
//3.
for(let i = 12; i < 4001; i += 3){
    console.log(i)
}

//B. Get Even

for(let i = 0; i < 101; i +=2){
console.log(i + " is an even number")
}

//C. Give me five

for(let i = 0; i < 101; i++){
    if(i % 5 == 0){
        console.log("I found a number " + i  + ". High Five");
    }
    else if(i % 3 == 0){
        console.log("I found a number " + i  + ". Three is a crowd");
    }
    else{
        console.log("I found a number " + i);
    }
}

//D. Savings Account
//1.
let bankAccount = 0;
for(i=0; i < 11; i++){
    bankAccount = bankAccount + i;
}
console.log(bankAccount);

//2.
let doubleAccount = 0;
for(i = 0; i < 101; i++){
    doubleAccount = (doubleAccount + (2 * i));
}
console.log(doubleAccount);

//E. Multiples of 3 and 5.
//done this already!!!



//III. Arrays and control flow
//A. Talk about it
    //1. Thinkgs in array are called elements.
    //2. yes
    //3. number of student in each chaptr of GA. totalStudents = [14, 12, 7, 17].

//B. Easy does it
var quotes = ["Ouch", "oww, that hurts", "AAAAAAA!!!"];

//C.
const randomThings = [1, 10, "Hello", true]
//1. by putting its index number after th earrays name, like so.:
randomThings[1];
//2.
randomThings[2] = "World";
console.log(randomThings);

//D. change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1. ourClass[2]
ourClass[3] = "Octocat";
ourClass.push("Cloudcity");

console.log(ourClass);

//E. Mix it up
const myArray = [5, 10, 500, 20]
myArray.push("Egon");
myArray.push("Valeria");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
Array.prototype.reverse(myArray);

console.log(myArray);

//F. Biggie Smalls
var checkNumber = 923;

if(checkNumber <= 100){
    console.log("Small Number")
}
else{
    console.log("Big Number")
}

//G. Monkey in the middle
var checkNumber1 = 30;

if(checkNumber1 < 5){
    console.log("Little Number");
}
else if(checkNumber1 > 10){
    console.log("big Number");
}
else{
    console.log("Monkey");
}

//H. What's in the closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Krystyn is rocking that " + kristynsCloset[2] + " today.");

  kristynsCloset.push("raybans");

  kristynsCloset[5] = "Stained knit had";

  console.log("Thom is rocking that " + (thomsCloset[0])[0] + " today");
  console.log("Thom is rocking that " + (thomsCloset[1])[0] + " today");
  console.log("Thom is rocking that " + (thomsCloset[2])[1] + " today");

  console.log("Thom is rocking his outfit with " + (thomsCloset[0])[0] + ", " + (thomsCloset[1])[0] + " and " + (thomsCloset[2])[0] + " today");

  (thomsCloset[1])[2] = "Footie Pajamas";




  // IV Functions
  //A. printGreeting
  function printGreeting(name){
    return "Hello there, " + name;
  }
  console.log(printGreeting("Slimer"));

  //B. printCool
  function printCool(name){
    return name + " is cool";
  }
  console.log(printCool("Captain Reynolds"));

  //C. Calculate Cube
  function calculateCube(number){
      return number * number * number;
  }
  console.log(calculateCube(5))

//D. isVowel

function isVowel(letter){
    if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
        return true;
    }
    else{
        return false;
    }
}

console.log(isVowel("A"));

//E. getTwoLengths
function getTwoLengths(string1, string2){
    return [string1.length, string2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//F. getMultipleLengths

function getMultipleLengths([]){
    return array3.length;
}

//console.log(array3["hello", "what", "up"]);

//G. maxOfThree
function maxOfThree(num1, num2, num3){
   return Math.max(num1, num2, num3)
}

console.log(maxOfThree(6, 9, 1));

//H. printLongestWord


//I transmogrify

function transmogrify(firstNum, secondNum, thirdNum){
    return Math.pow(firstNum * secondNum, thirdNum)
}

console.log(transmogrify(5, 3, 2));

//J. reverseWordOrder


//K. get down and dirty with math.random

function randomNumber(){
    for(i = 1; i <11; i++){
        return Math.random(randomNumber * 10);
    }
}
console.log(randomNumber());


//Objects
//A. Make a user object

const user = {
    name: "Santa",
    email: "santa.clause@northpole.com",
    age: 204,
    purchased: [],
}

console.log(user);

//B. Update the user

user.email = "santaclasue@NPole.com";
user.age = user.age + 1;



//C. Adding keys and values

user.location = "North Pole";



//D. Shopaholic
user.purchased.push("Carbohydrates");
user.purchased.push("Peace of mind");
user.purchased.push("Merino jodhpurs")

console.log(user.purchased[2]);

console.log(user);


//E. Object Within Object
user.friend = {
    name: "The elves",
    age: 200,
    location: "north pole",
    purchased: [],

}

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;

user.friend.purchased = ["the one ring"];
user.friend.purchased.push("A Latte");

console.log(user);
console.log(user.friend.purchased[1]);


//F. Loops
for(let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}

for(let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}


//G. functins can operate on objects
function updateUser(){
    let userAge = 0;
    for(let i = 0; i < 15; i++){
        userAge = userAge + 1;
        return userAge
    }
}
console.log(updateUser(3));

