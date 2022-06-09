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
  genre: "Self-help book",
  year: "1992",
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
  let randomNumber = Math.floor(Math.random() * quotes.length);
let randomObject = quotes[randomNumber];
console.log(randomNumber);
console.log(randomObject);
return randomObject;
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  // 3. Return the variable storing the random quote object
}
getRandomQuote();


/***
 * `printQuote` function
***/

function printQuote() {
   // 1. Create a variable that calls the getRandomQuote() 
  // function
let randomQuote = getRandomQuote();
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
let quoteElements = '';
quoteElements = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + "";

// 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
//   // 4. Use an if statement to check of the year property exists, 
//   // and if it does, concatenate a <span></span> element, 
//   // appropriate className, and year property to the HTML 
//   //string
  
if (randomQuote.citation) {
  // Code to run if your condition evaluates to true
  quoteElements += '<span class="citation">' + randomQuote.citation + '' + '</span>';
 }

if (randomQuote.year) {
  // Code to run if your condition evaluates to true
  quoteElements += '<span class="year">' + randomQuote.year + '</span>';

 }



 if (randomQuote.genre) {
  quoteElements += ', ' + '<span class="genre">' + randomQuote.genre + '</span>';
 }


 

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
quoteElements += '</p>';

   // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

document.getElementById("quote-box").innerHTML = quoteElements; 


}

function randombgColor() {
  const x = Math.floor(Math.random() * 200);
  const y = Math.floor(Math.random() * 400);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = bgColor;
  }


setInterval(printQuote, 4000);
setInterval(randombgColor, 4000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);