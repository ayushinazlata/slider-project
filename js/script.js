const slides = [
    {
        image: 'images/rostov-on-don_admiral.png',
        city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m²',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        image: 'images/sochi.png',
        city: 'Sochi<br>Thieves',
        area: '105 m²',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        image: 'images/rostov-on-don_patriotic.png',
        city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m²',
        time: '3 months',
        cost: 'Upon request'
    }
];
  
let currentSlide = 0;
  
const elements = {
    image: document.querySelector('.slider__image'),
    city: document.querySelector('[data-field="city"]'),
    area: document.querySelector('[data-field="area"]'),
    time: document.querySelector('[data-field="time"]'),
    cost: document.querySelector('[data-field="cost"]'),
    navLinks: document.querySelectorAll('.slider__link'),
    dots: document.querySelectorAll('.slider__dot'),
    leftArrow: document.querySelector('.slider__arrow--left'),
    rightArrow: document.querySelector('.slider__arrow--right')
};
  
function updateSlide(index) {
    const slide = slides[index];
  
    elements.image.src = slide.image;
    elements.city.innerHTML = slide.city;
    elements.area.textContent = slide.area;
    elements.time.textContent = slide.time;
    elements.cost.textContent = slide.cost;
  
    elements.dots.forEach(dot => dot.classList.remove('active'));
    elements.dots[index].classList.add('active');
  
    elements.navLinks.forEach(link => link.classList.remove('active'));
    elements.navLinks[index].classList.add('active');
}
  
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
}
  
function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
}
  
elements.rightArrow.addEventListener('click', showNextSlide);
elements.leftArrow.addEventListener('click', showPrevSlide);
  
elements.dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlide(index);
    });
});
  
elements.navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      currentSlide = index;
      updateSlide(index);
    });
});
  
updateSlide(currentSlide);
  