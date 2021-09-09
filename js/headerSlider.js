const slides = document.querySelectorAll('.headerSlide'); 
const next = document.querySelector('#headerSliderNext');
const prev = document.querySelector('#headerSliderPrev');

const auto = true;
const intervalTime = 8000;
let slideInterval;


const nextSlide = () => {

    const current = document.querySelector('.activeSlide');
    current.classList.remove('activeSlide');
    //check for next slide
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('activeSlide');
    }
    else{
        //add current to first slide
        slides[0].classList.add('activeSlide');
    }
    //setTimeout(() => current.classList.remove('current'));

}

const prevSlide = () => {

    const current = document.querySelector('.activeSlide');
    current.classList.remove('activeSlide');
    //check for next slide
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('activeSlide');
    }
    else{
        //add current to last slide
        slides[slides.length - 1].classList.add('activeSlide');
    }
    //setTimeout(() => current.classList.remove('current'));

}


next.addEventListener('click', e =>{
    nextSlide();

    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

prev.addEventListener('click', e =>{
    prevSlide();

    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

window.onload=function(){
    setTimeout(loadNextSlideAfterTime, 8000)   
};

function loadNextSlideAfterTime() { 
    document.getElementById("headerSliderNext").click();
}