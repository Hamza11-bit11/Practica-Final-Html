console.log("Benvingut/da a SpeedGear!");

const galeries = [
  [
    'img/cotxe1.jpg.png', 'img/cotxe2.jpg.png', 'img/cotxe3.png',
    'img/cotxe4.png', 'img/cotxe6.png', 'img/cotxe7.png'
  ],
  [
    'img/FordMustang.png', 'img/Fordmustang.png', 'img/FordMustang2.png',
    'img/FordMustang3.png', 'img/FordMustang4.png', 'img/FordMustang5.png'
  ],
  [
    'img/azul1.png', 'img/azul2.png', 'img/azul3.png',
    'img/azul4.png', 'img/azul5.png', 'img/azul6.png'
  ],
  [
    'img/bugatti3.png', 'img/bugatti4.png', 'img/bugatti5.png',
    'img/bugatti6.png', 'img/bugatti7.png'
  ],
  [
    'img/lamborghini1.jpg', 'img/lamborghini2.jpg', 'img/lamborghini3.jpg',
    'img/lamborghini4.jpg', 'img/lamborghini5.jpg'
  ],
  [
    'img/lamborghini2.jpg', 'img/lamborghini3.jpg', 'img/lamborghini1.jpg'
  ],
  [
    'img/lamborghini3.jpg', 'img/lamborghini1.jpg', 'img/lamborghini2.jpg'
  ]
];

const contenidors = document.querySelectorAll('.imatge-cotxe');

contenidors.forEach((contenidor, i) => {
  let index = 0;
  let intervalId = null;
  const img = contenidor.querySelector('.img-slide');
  const originalSrc = img.src;

  const showNextImage = () => {
    img.classList.add('fade-out');
    setTimeout(() => {
      index = (index + 1) % galeries[i].length;
      img.src = galeries[i][index];
      img.classList.remove('fade-out');
    }, 700);
  };

  const startSlideshow = () => {
    if (!galeries[i] || intervalId) return;

    showNextImage(); // Cambia imagen inmediatamente
    intervalId = setInterval(showNextImage, 3000);
  };

  const stopSlideshow = () => {
    clearInterval(intervalId);
    intervalId = null;
    img.src = originalSrc; // Opcional: volver a imagen original
  };

  contenidor.addEventListener('mouseenter', startSlideshow);
  contenidor.addEventListener('mouseleave', stopSlideshow);
});
