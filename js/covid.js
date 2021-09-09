const covid = () => {
   const covidBtn = document.querySelector('#covid-btn');
   const covidFaq = document.querySelector('#covid-faq');

   covidBtn.addEventListener('click',() => {
      //hide show nav
      if(covidFaq.classList.contains("covid__bottom--close")){
         covidFaq.classList.remove('covid__bottom--close');
         covidFaq.classList.add('covid__bottom--open');
         covidBtn.style.transform = "rotate(180deg)";
      }
      else{
         covidFaq.classList.add('covid__bottom--close');
         covidFaq.classList.remove('covid__bottom--open');
         covidBtn.style.transform = "rotate(0deg)";
      }
      
   });
}

covid();