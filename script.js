// Missatge inicial a la consola
console.log("Benvingut/da a AutoRàpid!");

// Canvi de color al passar el ratolí per sobre dels enllaços
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.opacity = "0.7";
  });
  link.addEventListener("mouseout", () => {
    link.style.opacity = "1";
  });
});

// Opcional: menú hamburguesa per a mòbils
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector("nav ul");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("visible");
  });
}

// Alert quan s’envia el formulari de contacte
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita l'enviament real
    alert("Gràcies per contactar amb nosaltres!");
    form.reset();
  });
}

// 🔁 Canvi d’imatges automàtic cada 3 segons per cada cotxe
const galeries = [
  [
    'img/cotxe1.jpg.png', 'img/cotxe2.jpg.png', 'img/cotxe3.png',
    'img/cotxe4.png', 'img/cotxe6.png',
    'img/cotxe7.png',
  ],
  [
    'img/FordMustang.png', 'img/Fordmustang.png', 'img/FordMustang2.png',
    'img/FordMustang3.png', 'img/FordMustang4.png', 'img/FordMustang5.png'
  ]
];

// Seleccionem tots els contenidors d'imatges
const contenidors = document.querySelectorAll('.imatge-cotxe');

contenidors.forEach((contenidor, i) => {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % galeries[i].length;
    const img = contenidor.querySelector('.img-slide');
    if (img) img.src = galeries[i][index];
  }, 3000); // Cada 3 segons
});
