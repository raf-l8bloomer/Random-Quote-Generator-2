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
const quotes = [
  {
    quote: "I had hope. Anyway, you ended up disappointing me more than any of the other silly girls",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "Find Me That Piece Of Paper I Had In My Hand Yesterday Morning.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "There you are, Emily. How many times do I have to scream your name?",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "And this layout for the Winter Wonderland Spread. Not 'wonderful' yet",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "Is there some reason that my coffee isn’t here? Has she died or something?",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "By all means, move at a glacial pace. You know how that thrills me.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "And R.S.V.P. Yes to Michael Kors’ party, I want the driver to drop me off at 9:30 and pick me up at 9:45 sharp.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "Florals? For Spring? Groundbreaking.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "Please bore someone else with your questions.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "Oh, don't be ridiculous Andrea. Everybody wants this. Everybody wants to be us.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  },
  {
    quote: "That's all.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    year: "2006",
  }
];

console.log(quotes);

/***
 * `getRandomQuote` function uses randomizer to select quote ID and pulls single quote from array
***/

function getRandomQuote(arr) {
  let id = Math.floor(Math.random() * arr.length);
  let quote = arr[id];
  return quote;
}




/***
 * `printQuote` function calls getRandomQuote on array of quotes and adds it to the HTML
***/

function printQuote() {
  let printedQuote = getRandomQuote(quotes);
  let HTML = `<p class="quote"> ${printedQuote.quote} </p>
  <p class="source"> ${printedQuote.source}`;
  if (printedQuote.citation) {
    HTML += `<span class="citation"> ${printedQuote.citation} </span>`
  };
  if (printedQuote.source){
    HTML += `  <span class="year"> ${printedQuote.year} </span>   `
  };
  HTML += '</p>';
  return document.getElementById('quote-box').innerHTML = HTML; 

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);