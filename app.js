let generateBtn = document.querySelector("#generate");
let quote = document.querySelector("#quote");
let wirriteBy = document.querySelector("#writtenBy");
// create a quote with  list of array objects

let quotes = [
  { quote: "Never Judge Book By Its Cover", author: "Amiir Muse" },
  { quote: "Don't Give Up ", author: "Nadiyo" },
  { quote: "Laanta Toosi Intee Curdin Tahay  ", author: "Sharmaake ahmed" },
  { quote: "Canjeero See Ukala Horaysay Loo Cunaa ", author: "Nadiyo" },
  { quote: "Lahel Lahel Lawaa Xigto  ", author: "muslimo Cida Dariska" },
  { quote: "Adunyo Haiku Halay Ilaahey Ka cabso", author: "Siman Sharmaake" },
  { quote: "Asc Seethy wllo  ", author: "shariifo Mohamed" },
  { quote: "Wcs wllo Aad  U fiicanay ", author: "Sacdiyo Mohamed" },
  {
    quote: "Go To Gym , if you break up with your girl friend ",
    author: "anas Ahmed",
  },
];

generateBtn.addEventListener("click", function () {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = `"${quotes[randomQuote].quote}.quote"`;
  wirriteBy.innerHTML = `Written By : ${quotes[randomQuote].author}`;

  console.log(randomQuote)
  console.log(quotes[randomQuote].author)
  console.log(quotes[0].author)

});