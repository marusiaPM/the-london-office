const address = () => {
     const westEndBtn = document.querySelector('.ourAddress__btn--1');
     const cityBtn = document.querySelector('.ourAddress__btn--2');
     const strandBtn = document.querySelector('.ourAddress__btn--3');

     const westEnd = document.querySelector('.ourAddress__address--1');
     const city = document.querySelector('.ourAddress__address--2');
     const strand = document.querySelector('.ourAddress__address--3');

     const westEndMap = document.querySelector('.ourAddress__map--1');
     const cityMap = document.querySelector('.ourAddress__map--2');
     const strandMap = document.querySelector('.ourAddress__map--3');

     westEndBtn.addEventListener('click',() => {
          westEndBtn.classList.add('ourAddress__btn--active');
          cityBtn.classList.remove('ourAddress__btn--active');
          strandBtn.classList.remove('ourAddress__btn--active');

          westEnd.classList.add('ourAddress__address--visible');
          westEnd.classList.remove('ourAddress__address--hidden');
          city.classList.remove('ourAddress__address--visible');
          city.classList.add('ourAddress__address--hidden');
          strand.classList.remove('ourAddress__address--visible');
          strand.classList.add('ourAddress__address--hidden');

          westEndMap.classList.add('ourAddress__map--visible');
          westEndMap.classList.remove('ourAddress__map--hidden');
          cityMap.classList.remove('ourAddress__map--visible');
          cityMap.classList.add('ourAddress__map--hidden');
          strandMap.classList.remove('ourAddress__map--visible');
          strandMap.classList.add('ourAddress__map--hidden');

     });

     cityBtn.addEventListener('click',() => {
          westEndBtn.classList.remove('ourAddress__btn--active');
          cityBtn.classList.add('ourAddress__btn--active');
          strandBtn.classList.remove('ourAddress__btn--active');

          westEnd.classList.remove('ourAddress__address--visible');
          westEnd.classList.add('ourAddress__address--hidden');
          city.classList.add('ourAddress__address--visible');
          city.classList.remove('ourAddress__address--hidden');
          strand.classList.remove('ourAddress__address--visible');
          strand.classList.add('ourAddress__address--hidden');

          westEndMap.classList.remove('ourAddress__map--visible');
          westEndMap.classList.add('ourAddress__map--hidden');
          cityMap.classList.add('ourAddress__map--visible');
          cityMap.classList.remove('ourAddress__map--hidden');
          strandMap.classList.remove('ourAddress__map--visible');
          strandMap.classList.add('ourAddress__map--hidden');
          
     });

     strandBtn.addEventListener('click',() => {
          westEndBtn.classList.remove('ourAddress__btn--active');
          cityBtn.classList.remove('ourAddress__btn--active');
          strandBtn.classList.add('ourAddress__btn--active');

          westEnd.classList.remove('ourAddress__address--visible');
          westEnd.classList.add('ourAddress__address--hidden');
          city.classList.remove('ourAddress__address--visible');
          city.classList.add('ourAddress__address--hidden');
          strand.classList.add('ourAddress__address--visible');
          strand.classList.remove('ourAddress__address--hidden');

          westEndMap.classList.remove('ourAddress__map--visible');
          westEndMap.classList.add('ourAddress__map--hidden');
          cityMap.classList.remove('ourAddress__map--visible');
          cityMap.classList.add('ourAddress__map--hidden');
          strandMap.classList.add('ourAddress__map--visible');
          strandMap.classList.remove('ourAddress__map--hidden');
     });
     
}

address();