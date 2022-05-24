/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//This is an array of objects
let quotes = [

{
   quote: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.",
  source: "Marianne Williamson",
  citation: "A Return to Love",
  year: "1992"
},
{
  quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  source: "Mother Teresa"
},
{
  quote: "It is during our darkest moments that we must focus to see the light.",
  source: "Aristotle"
},
{
  quote: "Do not let making a living prevent you from making a life.",
  source: "John Wooden"
},
{
  quote: "Do, or do not. There is no \"try\"",
  source: "Yoda",
  citation: "Star Wars: Episode V - The Empire Strikes Back"
}

];
console.log(quotes);



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length) + 1;
let randomObject = quotes[randomNumber];
return randomObject;
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  // 3. Return the variable storing the random quote object
}




/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);