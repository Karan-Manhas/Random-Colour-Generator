// This creates a button and stores the location of the button of HTML in JS
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {  
    const newColour = makeRandColour();
    document.body.style.backgroundColor = newColour;
    h1.innerText= newColour;


    function makeRandColour() {
        const R = Math.floor(Math.random() * 255);
        const G = Math.floor(Math.random() * 255);
        const B = Math.floor(Math.random() * 255);
        return `rgb(${R}, ${G}, ${B})`;
    }

//Colt Steele's js


})
/* const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
} */ 




