// Sidebar Animation

const humburger = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar-nav');
const crossIcon = document.querySelector('.cross-icon');
const burgerIcon = document.querySelector('.burger-icon');


humburger.addEventListener('click', () => {
    sidebar.classList.toggle('open-bar');
    crossIcon.classList.toggle('cross');
    burgerIcon.classList.toggle('burger');
});

// Typewriter Text Animation

const typeWriterText = document.querySelector('.type-writer-text');
const textArr = ["Web Developer", "Web Designer", "Tutor"];

let textArrayIndex = 0;
let charIndex = 0;

const type = () => {
    if (charIndex <= textArr[textArrayIndex].length - 1) {
        typeWriterText.textContent += textArr[textArrayIndex].
            charAt(charIndex);
        charIndex++
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 800)
    }

}

const erase = () => {
    if (charIndex > 0) {
        typeWriterText.textContent = textArr[textArrayIndex].
            slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 60);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArr.length) {
            textArrayIndex = 0;

        }
        setTimeout(type, 600);
    }
};

//Starts animation on page load.
document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Tabs Animation Section.

const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-panel');

tabs.forEach((tab) => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabs.forEach((target) => {
            target.classList.remove('active')
        });
        tab.classList.add('active');
        tabContent.forEach((tabContent) => {
            tabContent.classList.remove('active');
        });
        target.classList.add('active');
    });
});

// Contact Section Animation 

const contactAnimation = document.querySelectorAll('.contact-container');

contactAnimation.forEach((contact) => {
    contact.addEventListener('click', () => {
        contact.classList.toggle('is-active');
    });
});





// for (let i = 0; i < contactAnimation.length; i++) {
//     contactAnimation[i].addEventListener('click', () => {

//         this.classList.toggle('is-active');
//     });
// }