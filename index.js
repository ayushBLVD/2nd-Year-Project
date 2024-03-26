const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 1;

nextBtn.addEventListener('click', () => {
  if(counter >= 4) return;
  slides.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slides.style.transform = `translateX(-${counter * 25}%)`;
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  slides.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slides.style.transform = `translateX(-${counter * 25}%)`;
});

slides.addEventListener('transitionend', () => {
  if(slides[counter].id === 'lastClone') {
    slides.style.transition = "none";
    counter = slides.length - 2;
    slides.style.transform = `translateX(-${counter * 25}%)`;
  }
  if(slides[counter].id === 'firstClone') {
    slides.style.transition = "none";
    counter = slides.length - counter;
    slides.style.transform = `translateX(-${counter * 25}%)`;
  }
});

