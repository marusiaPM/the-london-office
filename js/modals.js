/////// TOP NAV MODAL BUTTONS ///////

// Log In Modal 
const modals1 = () => {
    const openLogInBtn = document.querySelectorAll('.openLogInBtn');
    const LogIn = document.querySelector('#modalContainerLogIn');
    const closeLogInBtn  = document.querySelector('#closeLogInModal');

    openLogInBtn.forEach(item => {
        item.addEventListener('click', () => {
            LogIn.classList.remove('closeModal');
            LogIn.classList.add('openModal');

            document.body.style.overflow = "hidden";
        });
    });

    closeLogInBtn.addEventListener('click',() => {
        LogIn.classList.add('closeModal');
        LogIn.classList.remove('openModal');

        document.body.style.overflow = "scroll";
    });

}
modals1();

//Forgotten Password Modals
const modals2 = () => {
    const openForgottenPass = document.querySelector('.forgottenPassBtn');
    const forgottenPass = document.querySelector('#modalContainerForgottenPass');
    const closeForgottenPassn  = document.querySelector('.backToLogInBtn');

    //Top Nav Log In Modal
    openForgottenPass.addEventListener('click',() => {
        forgottenPass.classList.remove('closeModal');
        forgottenPass.classList.add('openModal');
        LogIn.classList.add('closeModal');
        LogIn.classList.remove('openModal');

    });
    closeForgottenPassn.addEventListener('click',() => {
        forgottenPass.classList.add('closeModal');
        forgottenPass.classList.remove('openModal');
        LogIn.classList.remove('closeModal');
        LogIn.classList.add('openModal');

    });

}
modals2();

//10% OFF MODAL
const discountModal = () =>{
    const Open5 = document.querySelector('#openDiscountModal');
    const Modal5 = document.querySelector('#modalContainer10-OFF');
    const Close5  = document.querySelectorAll('.closeDiscountModal');

    Open5.addEventListener('click',() => {
            Modal5.classList.remove('closeModal');
            Modal5.classList.add('openModal');

            document.body.style.overflow = "hidden";
    });

    Close5.forEach(item => {
        item.addEventListener('click', () => {
            Modal5.classList.add('closeModal');
            Modal5.classList.remove('openModal');

            document.body.style.overflow = "scroll";
        });
    });

}
discountModal();

//FREE COMPANY FORMATION MODAL
const freeCompanyFModal = () =>{
    const Open6 = document.querySelectorAll('.openFreeCompanyFModal');
    const Modal6 = document.querySelector('#modalContainerFreeCompanyF');
    
    Open6.forEach(item => {
        item.addEventListener('click', () => {
            Modal6.classList.remove('closeModal');
            Modal6.classList.add('openModal');

            document.body.style.overflow = "scroll";
        });
    });

}
freeCompanyFModal();

// bell yard meeting room map
const bellYardMapModal = () =>{
    const Open = document.querySelector('#bellYardMapOpen');
    const Modal = document.querySelector('#bellYardMapModal');
    const Close  = document.querySelector('#bellYardMapModalClose');

    Open.addEventListener('click',() => {
            Modal.classList.remove('closeModal');
            Modal.classList.add('openModal');

            document.body.style.overflow = "hidden";
    });

    Close.addEventListener('click',() => {
        Modal.classList.add('closeModal');
        Modal.classList.remove('openModal');

        document.body.style.overflow = "scroll";
    });

}
bellYardMapModal();

// portland street meeting room map 
const portlandStreetMapModal = () =>{
    const Open2 = document.querySelector('#portlandStreetMapOpen');
    const Modal2 = document.querySelector('#portlandStreetMapModal');
    const Close2  = document.querySelector('#portlandStreetMapModalClose');

    Open2.addEventListener('click',() => {
            Modal2.classList.remove('closeModal');
            Modal2.classList.add('openModal');

            document.body.style.overflow = "hidden";
    });

    Close2.addEventListener('click',() => {
        Modal2.classList.add('closeModal');
        Modal2.classList.remove('openModal');

        document.body.style.overflow = "scroll";
    });

}
portlandStreetMapModal();


