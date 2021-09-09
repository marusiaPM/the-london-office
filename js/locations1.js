const Locations1  = () => {
   const Btn1 = document.querySelector('#locations1Btn1');
   const Btn2 = document.querySelector('#locations1Btn2');
   const Btn3 = document.querySelector('#locations1Btn3');

   const Map1 = document.querySelector('#locations1Map1');
   const Map2 = document.querySelector('#locations1Map2');
   const Map3 = document.querySelector('#locations1Map3');

   Btn1.addEventListener('click',() => {

      Map1.classList.remove('locations1Map--hidden');
      Map1.classList.add('locations1Map--visible');

      Map2.classList.add('locations1Map--hidden');
      Map2.classList.remove('locations1Map--visible');

      Map3.classList.add('locations1Map--hidden');
      Map3.classList.remove('locations1Map--visible');

   });

   Btn3.addEventListener('click',() => {

      Map3.classList.remove('locations1Map--hidden');
      Map3.classList.add('locations1Map--visible');

      Map2.classList.add('locations1Map--hidden');
      Map2.classList.remove('locations1Map--visible');

      Map1.classList.add('locations1Map--hidden');
      Map1.classList.remove('locations1Map--visible');

   });

   Btn2.addEventListener('click',() => {

      Map2.classList.remove('locations1Map--hidden');
      Map2.classList.add('locations1Map--visible');

      Map1.classList.add('locations1Map--hidden');
      Map1.classList.remove('locations1Map--visible');

      Map3.classList.add('locations1Map--hidden');
      Map3.classList.remove('locations1Map--visible');

   });
}

Locations1();