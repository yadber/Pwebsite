



// For image gallery 

const current = document.querySelector('#current');
console.log(current);
const imgs = document.querySelectorAll('.imgs img');

console.log(imgs);

imgs.forEach(img => img.addEventListener('click' , e =>
    {
        console.log("this shit is clicked");
        current.src = e.target.src;
        current.classList.add('fade-in');
        
        setTimeout(() => current.classList.remove('fade-in' ,500));
    }   
));

