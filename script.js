console.log("Benvingut/da a SpeedGear!");

const galeries = [
  // Ford Mustang 1
  [
    'img/cotxe1.png', 'img/cotxe2.png', 'img/cotxe3.png',
    'img/cotxe4.png', 'img/cotxe6.png', 'img/cotxe7.png'
  ],
  // Ford Mustang 2
  [
    'img/FordMustang.png', 'img/Fordmustang.png', 'img/FordMustang2.png',
    'img/FordMustang3.png', 'img/FordMustang4.png', 'img/FordMustang5.png'
  ],
  // Ford Mustang 3
  [
    'img/azul1.png', 'img/azul2.png', 'img/azul3.png',
    'img/azul4.png', 'img/azul5.png', 'img/azul6.png'
  ],
  // Bugatti Chiron
  [
    'img/bugatti3.png', 'img/bugatti4.png', 'img/bugatti5.png',
    'img/bugatti6.png', 'img/bugatti7.png'
  ],
  // Bugatti Mistral
  [
    'img/bugattiN.png', 'img/bugattiN1.png', 'img/bugattiN2.png',
    'img/bugattiN3.png', 'img/bugattiN4.png', 'img/bugattiN5.png'
  ],
  // Bugatti Bolide
  [
    'img/bugattiB.png', 'img/bugattiB2.png', 'img/bugattiB3.png', 'img/bugattiB4.png'
  ],
  // Lamborghini Aventador
  [
    'img/lamboA.jpg', 'img/lamboA1.jpg', 'img/lamboA2.jpg', 'img/lamboA3.jpg',
    'img/lamboA4.jpg', 'img/lamboA5.jpg', 'img/lamboA6.jpg', 'img/lamboA7.jpg', 'img/lamboA8.jpg'
  ],
  // Lamborghini Huracán
  [
    'img/lamboB.jpeg', 'img/lamboB1.jpeg', 'img/lamboB2.jpeg',
    'img/lamboB3.jpeg', 'img/lamboB4.jpeg', 'img/lamboB5.jpeg', 'img/lamboB6.jpeg'
  ],
  // Lamborghini Urus (🔄 actualizado)
  [
    'img/lamboU.jpg', 'img/lamboU1.jpg', 'img/lamboU2.jpg',
    'img/lamboU3.jpg', 'img/lamboU4.jpg', 'img/lamboU5.jpg', 'img/lamboU6.jpg'
  ]
];

const contenidors = document.querySelectorAll('.imatge-cotxe');

contenidors.forEach((contenidor, i) => {
  let index = 0;
  let intervalId = null;
  const img = contenidor.querySelector('.img-slide');
  if (!img) return;

  const originalSrc = img.src;
  if (!galeries[i]) return;

  const showNextImage = () => {
    img.classList.add('fade-out');
    setTimeout(() => {
      index = (index + 1) % galeries[i].length;
      img.src = galeries[i][index];
      img.classList.remove('fade-out');
    }, 700);
  };

  const startSlideshow = () => {
    if (intervalId) return;
    showNextImage();
    intervalId = setInterval(showNextImage, 3000);
  };

  const stopSlideshow = () => {
    clearInterval(intervalId);
    intervalId = null;
    img.src = originalSrc;
  };

  contenidor.addEventListener('mouseenter', startSlideshow);
  contenidor.addEventListener('mouseleave', stopSlideshow);
});
