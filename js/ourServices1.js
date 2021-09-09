//OUR SERVICEs 1 HOVER EFFECTS 
const ourServ1 = () => {
    const servBox1 = document.querySelectorAll('.ourServices1Box__overlay');
    
    servBox1.forEach(item => {
        
        item.addEventListener('mouseover', () => {
            item.classList.add('ourServices1Box-show');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('ourServices1Box-show');
        });

        item.addEventListener('ontouchstart', () => {
            item.classList.add('ourServices1Box-show');
        });

    });

}

ourServ1();