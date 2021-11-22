const carrusel = document.querySelector('.carrusel__items');

let interval;
let step = 1;

const start = () => {
  interval = setInterval(() => {
    const maxWidth = carrusel.scrollWidth - carrusel.clientWidth;

    carrusel.scrollLeft += step;

    if (carrusel.scrollLeft === maxWidth) {
      step = -1;
    } else if (carrusel.scrollLeft === 0) {
      start();
      step *= 0;
    }
  }, 10);
};

const stop = () => clearInterval(interval);

//top cuando el cursor salga de la imagen
carrusel.addEventListener('mouseover', stop, false);
//inicia el carrusel
carrusel.addEventListener('mouseout', start, false);

start();
