const quotesContainer = document.querySelector('.partnersQuoteContainer');
const partnersQuotes = document.querySelectorAll('.partnersQuote');

const partnersPrev = document.querySelector('#partnersPrev');
const partnersNext = document.querySelector('#partnersNext');

//counter
let counter = 4;
const size = partnersQuotes[0].clientWidth;

quotesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

// next
var nextPartnerQ = function (event) {
  if(counter >= partnersQuotes.length -1) return;
  quotesContainer.style.transition = "transform 0.7s ease-in-out";
  counter++;
  quotesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

//prev
var prevPartnerQ = function (event) {
   if(counter <= 0) return;
   quotesContainer.style.transition = "transform 0.7s ease-in-out";
   counter--;
   quotesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

partnersNext.addEventListener('click', nextPartnerQ, false);
partnersNext.addEventListener('touch', nextPartnerQ, false);
partnersPrev.addEventListener('click', prevPartnerQ, false);
partnersPrev.addEventListener('touch', prevPartnerQ, false);

quotesContainer.addEventListener('transitionend',()=>{
   if(partnersQuotes[counter].id === 'last-clone'){
      quotesContainer.style.transition = "none";
      counter = partnersQuotes.length -2;
      quotesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }

   if(partnersQuotes[counter].id === 'first-clone'){
      quotesContainer.style.transition = "none";
      counter = partnersQuotes.length -counter;
      quotesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }
});