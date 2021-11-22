const carrusel = document.querySelector('.carrusel__items');

let interval;
let step = 1;
const maxWidth = carrusel.scrollWidth - carrusel.clientWidth;

const start = () => {
  interval = setInterval(() => {
    carrusel.scrollLeft += step;

    if (carrusel.scrollLeft === maxWidth) {
      step = -1;
    } else if (carrusel.scrollLeft === 0) {
      step = 1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(interval);
};


//para cuando el cursor salga de la imagen
carrusel.addEventListener('mouseover', stop, false);
//inicia el carrusel
carrusel.addEventListener('mouseout', start, false);

start();
