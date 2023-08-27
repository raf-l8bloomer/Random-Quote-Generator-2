// `quotes` array 
const quotes = [
  {
    quote: "I had hope. Anyway, you ended up disappointing me more than any of the other silly girls",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "Find Me That Piece Of Paper I Had In My Hand Yesterday Morning.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "There you are, Emily. How many times do I have to scream your name?",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "And this layout for the Winter Wonderland Spread. Not 'wonderful' yet",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "Is there some reason that my coffee isn’t here? Has she died or something?",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "By all means, move at a glacial pace. You know how that thrills me.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "And R.S.V.P. Yes to Michael Kors’ party, I want the driver to drop me off at 9:30 and pick me up at 9:45 sharp.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "Florals? For Spring? Groundbreaking.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "Please bore someone else with your questions.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "Oh, don't be ridiculous Andrea. Everybody wants this. Everybody wants to be us.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  },
  {
    quote: "That's all.",
    source: "Miranda Priestly",
    citation: "The Devil Wears Prada",
    tag: "Movie",
    year: "2006",
  }
];

// Saving timeout ID for resetting after every click
let timeout;

// `getRandomQuote` function uses randomizer to select quote ID and pulls single quote from array

function getRandomQuote(arr) {
  let id = Math.floor(Math.random() * arr.length);
  let quote = arr[id];
  return quote;
}

// `randomRgbColor` returns a random color for the background
function randomRgbColor() {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  let rgb = `rgb(${r}, ${g}, ${b})`;
  return document.body.style.backgroundColor = rgb;
};


//`printQuote` function calls getRandomQuote on array of quotes and adds it to the HTML
function printQuote() {
  randomRgbColor();
  let printedQuote = getRandomQuote(quotes);
  let HTML = `<p class="quote"> ${printedQuote.quote}</p>
  <p class="source"> ${printedQuote.source},`;
  if (printedQuote.citation) {
    HTML += `<span class="citation"> ${printedQuote.citation} </span>`
  };
  if (printedQuote.year) {
    HTML += `  <br>
    <span class="year">(${printedQuote.tag}, ${printedQuote.year} )</span>   `
  };
  HTML += '</p>';
  return document.getElementById('quote-box').innerHTML = HTML;
}

// reset Timeout
function setPrintQuoteTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(printQuote, 5000)
}


// Click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", function () {
  printQuote(); // change quote
  setPrintQuoteTimeout(); // reset timer when clicked
  }, false);

// Initialize timeout
setPrintQuoteTimeout();