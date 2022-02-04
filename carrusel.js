export default function carruselDos() {
  const carrusel = document.querySelector('.carrusel__css');
  const items_carrusel = document.querySelectorAll('.carrusel__css .item');

  const items_carrusel_array = [...items_carrusel];

  items_carrusel_array.map((item) => {
    const clone_item = item.cloneNode(true);
    carrusel.appendChild(clone_item);
    console.log(clone_item);
  });

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
}
