// Services Drop Down (from the navigation)
const dropDown1 = () => {
        const DropDownBtn1 = document.querySelector('#servicesDropDownBtn');
        const DropDown1 = document.querySelector('#servicesDropDown');
        const DropDownArrow1 = document.querySelector ('#servicesDropDownArrow');
    
        DropDownBtn1.addEventListener('mouseover',() => {
            //hide show nav
            if(DropDown1.classList.contains("hideDropDown")){
                DropDown1.classList.remove('hideDropDown');
                DropDown1.classList.add('showDropDown1');
                DropDownArrow1.style.transform = "rotate(180deg)"; 
                
            } 
        });

        DropDownBtn1.addEventListener('mouseout',() => {
        
                DropDown1.classList.add('hideDropDown');
                DropDown1.classList.remove('showDropDown1');
                DropDownArrow1.style.transform = "rotate(0deg)";
                
        });

        DropDownBtn1.addEventListener('click',() => {
            //hide show nav
            if(DropDown1.classList.contains("hideDropDown")){
                DropDown1.classList.remove('hideDropDown');
                DropDown1.classList.add('showDropDown1');
                DropDownArrow1.style.transform = "rotate(180deg)"; 
            }
            else{
                DropDown1.classList.add('hideDropDown');
                DropDown1.classList.remove('showDropDown1');
                DropDownArrow1.style.transform = "rotate(0deg)";
            }
        });
}
    
dropDown1();

//SERVICE PAGES - additional services drop down
const dropDown2 = () => {
    const DropDownBtn2 = document.querySelector('.additionalServicesDropDown__btn');
    const DropDown2 = document.querySelector('.additionalServicesDropDown__dropDown');
    const DropDownArrow2 = document.querySelector ('.additionalServicesDropDown__arrow');

    DropDownBtn2.addEventListener('click',() => {
        //hide show nav
        if(DropDown2.classList.contains("additionalServicesDropDown__dropDown--close")){

            DropDown2.classList.remove('additionalServicesDropDown__dropDown--close');
            DropDown2.classList.add('additionalServicesDropDown__dropDown--open');

            DropDownArrow2.style.transform = "rotate(180deg)"; 
            
        }

        else{
            DropDown2.classList.add('additionalServicesDropDown__dropDown--close');
            DropDown2.classList.remove('additionalServicesDropDown__dropDown--open');

            DropDownArrow2.style.transform = "rotate(0deg)"; 
        }
    });

}

dropDown2();
    

//LOCATIONS DROP DOWN
const dropDown3 = () => {
    const DropDownBtn3 = document.querySelector('.DropDownMenuLocationsBtn');
    const DropDown3 = document.querySelector('.DropDownMenuLocationsMenu');
    const DropDownArrow3 = document.querySelector ('.DropDownMenuLocationsArrow');

    DropDownBtn3.addEventListener('click',() => {
        //hide show nav
        if(DropDown3.classList.contains("DropDownMenuClose")){

            DropDown3.classList.remove('DropDownMenuClose');
            DropDown3.classList.add('DropDownMenuOpen');

            DropDownArrow3.style.transform = "rotate(180deg)"; 
            
        }

        else{
            DropDown3.classList.add('DropDownMenuClose');
            DropDown3.classList.remove('DropDownMenuOpen');

            DropDownArrow3.style.transform = "rotate(0deg)"; 
        }
    });

}

dropDown3();