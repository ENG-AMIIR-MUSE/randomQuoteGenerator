let generateBtn = document.querySelector("#generate");
let quote = document.querySelector("#quote");
let wirriteBy = document.querySelector("#Author");
// create a quote with  list of array objects

let quotes = [
    {
        quote: "You are the sunshine that brightens up my darkest days.",
        author: "Abdi Ahmed Ali"
    },
    {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Fatima Ali Jama Hussein"
    },
    {
        quote: "Every moment with you feels like a beautiful dream I never want to end.",
        author: "Hassan Mohamed Abdirahman"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Ayan Abdi Hussein"
    },
    {
        quote: "In your eyes, I found my home; in your heart, I found my love.",
        author: "Farah Hussein Omar"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Follow your heart and intuition.",
        author: "Nadia Omar Ali"
    },
    {
        quote: "My love for you is a journey that starts at forever and ends at never.",
        author: "Abdirahman Ali Hassan"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Safiya Abdi Mohamed"
    },
    // ... Add more quotes and authors as needed
];

generateBtn.addEventListener("click", function () {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = `"${quotes[randomQuote].quote}.quote"`;
  wirriteBy.innerHTML = `${quotes[randomQuote].author}`;


});