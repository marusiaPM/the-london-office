

const manualAddress = () => {
   const manualAddressBtn = document.querySelector('#manualAddressBtn');
   const manualAddress = document.querySelector('.manualAddress');
   const autoAddress = document.querySelector('.personalAddress__postCode');

   manualAddressBtn.addEventListener('click',() => {
      autoAddress.style.display = "none";
      manualAddress.style.display = "block";
      manualAddressBtn.style.display = "none";
   }); 

}
manualAddress();