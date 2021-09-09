// MAP MODALS 
// London West 1 
const westEnd1 = () =>{
   const Open = document.querySelector('#westEnd1ViewMap');
   const Modal = document.querySelector('#westEnd1Map');
   const Close  = document.querySelector('#closeWestEnd1Map');

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
westEnd1();

// London City 
const city = () =>{
   const Open = document.querySelector('#cityViewMap');
   const Modal = document.querySelector('#cityMap');
   const Close  = document.querySelector('#closeCity');

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
city();

// London Strand
const strand = () =>{
   const Open = document.querySelector('#strandViewMap');
   const Modal = document.querySelector('#strandMap');
   const Close  = document.querySelector('#closeStrand');

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
strand();


// // London West 1 
// const westEnd2 = () =>{
//    const Open = document.querySelector('#westEnd2ViewMap');
//    const Modal = document.querySelector('#westEnd2Map');
//    const Close  = document.querySelector('#closeWestEnd2Map');

//    Open.addEventListener('click',() => {
//          Modal.classList.remove('closeModal');
//          Modal.classList.add('openModal');

//          document.body.style.overflow = "hidden";
//    });

//    Close.addEventListener('click',() => {
//          Modal.classList.add('closeModal');
//          Modal.classList.remove('openModal');

//          document.body.style.overflow = "scroll";
//    });

// }
// westEnd2();


// Edinburgh 1 
const edin1 = () =>{
   const Open = document.querySelector('#edin1ViewMap');
   const Modal = document.querySelector('#edin1Map');
   const Close  = document.querySelector('#closeEdin1');

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
edin1();


// Edinburgh 2 
const edin2 = () =>{
   const Open = document.querySelector('#edin2ViewMap');
   const Modal = document.querySelector('#edin2Map');
   const Close  = document.querySelector('#closeEdin2');

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
edin2();


// Ipswich
const ipsw = () =>{
   const Open = document.querySelector('#ipswichViewMap');
   const Modal = document.querySelector('#ipswMap');
   const Close  = document.querySelector('#closeIpsw');

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
ipsw();


