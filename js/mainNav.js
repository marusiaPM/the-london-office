// const mainNav = () => {
//     const burger = document.querySelector('#burgerMenu');
//     const nav = document.querySelector('#mainNav');

//     burger.addEventListener('click',() => {
//         //hide show nav
//         if(nav.classList.contains("showMainNav")){
//             nav.classList.remove('showMainNav');
//             document.body.style.overflow = "scroll";
//         }
//         else{
//             nav.classList.add('showMainNav');
//             document.body.style.overflow = "hidden";
//         }
//         // transform burger
//         burger.classList.toggle('transform');
//     });
// }

// mainNav();


const burger = document.querySelector('#burgerMenu');
const nav = document.querySelector('#mainNav');

// Setup our function to run on various events
var mainNav = function (event) {
    //hide show nav
    if(nav.classList.contains("showMainNav")){
        nav.classList.remove('showMainNav');
        document.body.style.overflow = "scroll";
    }
    else{
        nav.classList.add('showMainNav');
        document.body.style.overflow = "hidden";
    }
    // transform burger
    burger.classList.toggle('transform');
};

// Add our event listeners
burger.addEventListener('click', mainNav, false);
burger.addEventListener('touch', mainNav, false);