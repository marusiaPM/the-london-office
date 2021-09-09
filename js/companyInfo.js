function companyInfo(){
   //inputs to show or hide
   const companyNum = document.querySelector('.companyInfo__companyNum');
   const newLimited = document.querySelector('.companyInfo__newLimited');

   //select
   const companyType = document.querySelector('#companyTypeSelect');
   const companyTypeValue = companyType.options[companyType.selectedIndex].value;

   switch(companyTypeValue){
      case "0":
         companyNum.style.display = "none";
         newLimited.style.display = "none";
      break;
      case "1":
         companyNum.style.display = "grid";
         newLimited.style.display = "none";
      break; 

      case "2":
         companyNum.style.display = "none";
         newLimited.style.display = "grid";
      break;

      case "3":
         companyNum.style.display = "none";
         newLimited.style.display = "none";
      break;
   }

}
