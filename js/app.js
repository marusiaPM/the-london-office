const App = () => {
const AppDot1 = document.querySelector('.phoneApp__dot--1');
const AppDot2 = document.querySelector('.phoneApp__dot--2');
const AppDot3 = document.querySelector('.phoneApp__dot--3');
const AppDot4 = document.querySelector('.phoneApp__dot--4');

const appInfoBox1 = document.querySelector('.phoneApp__box--1');
const appInfoBox2 = document.querySelector('.phoneApp__box--2');
const appInfoBox3 = document.querySelector('.phoneApp__box--3');
const appInfoBox4 = document.querySelector('.phoneApp__box--4');

const appLine1 = document.querySelector('#appLine1');
const appLine2 = document.querySelector('#appLine2');
const appLine3 = document.querySelector('#appLine3');
const appLine4 = document.querySelector('#appLine4');

AppDot1.addEventListener('click',() => {
   appLine1.style.display = "block"; 
   appInfoBox1.style.display = "block"; 

   appLine2.style.display = "none"; 
   appLine3.style.display = "none"; 
   appLine4.style.display = "none";

   appInfoBox2.style.display = "none";
   appInfoBox3.style.display = "none";
   appInfoBox4.style.display = "none";
});

AppDot2.addEventListener('click',() => {
   appLine2.style.display = "block"; 
   appInfoBox2.style.display = "block";

   appLine1.style.display = "none"; 
   appLine3.style.display = "none"; 
   appLine4.style.display = "none";

   appInfoBox1.style.display = "none"; 
   appInfoBox3.style.display = "none";
   appInfoBox4.style.display = "none";
});

AppDot3.addEventListener('click',() => {
   appLine3.style.display = "block"; 
   appInfoBox3.style.display = "block";

   appLine1.style.display = "none"; 
   appLine2.style.display = "none"; 
   appLine4.style.display = "none";

   appInfoBox1.style.display = "none";
   appInfoBox2.style.display = "none"; 
   appInfoBox4.style.display = "none";
});

AppDot4.addEventListener('click',() => {
   appLine4.style.display = "block"; 
   appInfoBox4.style.display = "block";

   appLine1.style.display = "none"; 
   appLine2.style.display = "none"; 
   appLine3.style.display = "none";

   appInfoBox1.style.display = "none";
   appInfoBox2.style.display = "none"; 
   appInfoBox3.style.display = "none";
});

} 

App();