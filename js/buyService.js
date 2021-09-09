// Virtual Business Address - price change based on period 
function buyServicePrice1(){ 

   //select
   const virtBusAddSelect = document.querySelector('#virtBusAddSelect');
   const virtBusAddSelectValue = virtBusAddSelect.options[virtBusAddSelect.selectedIndex].value;

   //price
   const virtBusAddPrice = document.querySelector('#virtBusAddPrice');

   switch(virtBusAddSelectValue){

      case "12":
         virtBusAddPrice.innerHTML='&#163;99.99 <span>+VAT</span>';
      break;

      case "6":
         virtBusAddPrice.innerHTML='&#163;69.99 <span>+VAT</span>';
      break;

      case "3":
         virtBusAddPrice.innerHTML='&#163;39.99 <span>+VAT</span>';
      break;

      case "1":
         virtBusAddPrice.innerHTML='&#163;19.99 <span>+VAT</span>';
      break;

      default:
         virtBusAddPrice.innerHTML='&#163;99.99 <span>+VAT</span>';
   }
}


// Virtual Business Plus - price change based on period 
function buyServicePrice2(){ 

   //select
   const virtBusPlusSelect = document.querySelector('#virtBusPlusSelect');
   const virtBusPlusSelectValue = virtBusPlusSelect.options[virtBusPlusSelect.selectedIndex].value;

   //price
   const virtBusPlusPrice = document.querySelector('#virtBusPlusPrice');

   switch(virtBusPlusSelectValue){

      case "12":
         virtBusPlusPrice.innerHTML='&#163;129.99 <span>+VAT</span>';
      break;

      case "6":
         virtBusPlusPrice.innerHTML='&#163;79.99 <span>+VAT</span>';
      break;

      case "3":
         virtBusPlusPrice.innerHTML='&#163;49.99 <span>+VAT</span>';
      break;

      case "1":
         virtBusPlusPrice.innerHTML='&#163;24.99 <span>+VAT</span>';
      break;

      default:
         virtBusPlusPrice.innerHTML='&#163;129.99 <span>+VAT</span>';
   }
}


// Telephone Answering - price change based on period 
function buyServicePrice3(){ 

   //select
   const buyServiceSelect3 = document.querySelector('#telAnsweringSelect');
   const buyServiceSelectValue3 = buyServiceSelect3.options[buyServiceSelect3.selectedIndex].value;

   //price
   const buyServicePrive3 = document.querySelector('#teleAnsweringPrice');

   switch(buyServiceSelectValue3){

      case "12":
         buyServicePrive3.innerHTML='&#163;129.99 <span>+VAT</span>';
      break;

      case "6":
         buyServicePrive3.innerHTML='&#163;79.99 <span>+VAT</span>';
      break;

      case "3":
         buyServicePrive3.innerHTML='&#163;49.99 <span>+VAT</span>';
      break;

      case "1":
         buyServicePrive3.innerHTML='&#163;24.99 <span>+VAT</span>';
      break;

      default:
         buyServicePrive3.innerHTML='&#163;129.99 <span>+VAT</span>';
   }
} 


//Virtual Business Address + Telephone Answering - price change based on period 
function buyServicePrice4(){ 

   //select
   const buyServiceSelect4 = document.querySelector('#virtBusAddPlusTeleAnswSelect');
   const buyServiceSelectValue4 = buyServiceSelect4.options[buyServiceSelect4.selectedIndex].value;

   //price
   const buyServicePrive4 = document.querySelector('#virtBusAddPlusTeleAnsw');

   switch(buyServiceSelectValue4){

      case "12":
         buyServicePrive4.innerHTML='&#163;199.99 <span>+VAT</span>';
      break;

      case "6":
         buyServicePrive4.innerHTML='&#163;109.99 <span>+VAT</span>';
      break;

      case "3":
         buyServicePrive4.innerHTML='&#163;69.99 <span>+VAT</span>';
      break;

      case "1":
         buyServicePrive4.innerHTML='&#163;34.99 <span>+VAT</span>';
      break;

      default:
         buyServicePrive4.innerHTML='&#163;199.99 <span>+VAT</span>';
   }
}   



//Virtual Business Plus + Telephone Answering - price change based on period 
function buyServicePrice5(){ 

   //select
   const buyServiceSelect5 = document.querySelector('#virtBusPlusPlusTeleAnswSelect');
   const buyServiceSelectValue5 = buyServiceSelect5.options[buyServiceSelect5.selectedIndex].value;

   //price
   const buyServicePrive5 = document.querySelector('#virtBusPlusTeleAnsw');

   switch(buyServiceSelectValue5){

      case "12":
         buyServicePrive5.innerHTML='&#163;229.99 <span>+VAT</span>';
      break;

      case "6":
         buyServicePrive5.innerHTML='&#163;129.99 <span>+VAT</span>';
      break;

      case "3":
         buyServicePrive5.innerHTML='&#163;79.99 <span>+VAT</span>';
      break;

      case "1":
         buyServicePrive5.innerHTML='&#163;39.99 <span>+VAT</span>';
      break;

      default:
         buyServicePrive5.innerHTML='&#163;229.99 <span>+VAT</span>';
   }
} 

//Virtual Business PlusAddress + Hosting
function buyServicePrice6(){ 

   //select
   const buyServiceSelect6 = document.querySelector('#VBPPlusHostingSelect');
   const buyServiceSelectValue6 = buyServiceSelect6.options[buyServiceSelect6.selectedIndex].value;

   //price
   const buyServicePrive6 = document.querySelector('#VBPPlusHosting');

   switch(buyServiceSelectValue6){

      case "12":
         buyServicePrive6.innerHTML='&#163;199.99 <span>+VAT</span>';
      break;

      case "6":
         buyServicePrive6.innerHTML='&#163;129.99 <span>+VAT</span>';
      break;

      case "3":
         buyServicePrive6.innerHTML='&#163;79.99 <span>+VAT</span>';
      break;

      case "1":
         buyServicePrive6.innerHTML='&#163;39.99 <span>+VAT</span>';
      break;

      default:
         buyServicePrive6.innerHTML='&#163;199.99 <span>+VAT</span>';
   }
}
