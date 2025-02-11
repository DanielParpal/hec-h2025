// 1. Modélisation d'un tableau
var pantalons = [
	"MEC x AQUANATOR Rain Pants - Men's", // 0
	"MEC Mochilero Stretch Pants - Men's", // 1
	"MEC Hydrofoil Stretch Pants - Men's", // 2
	"Rab Downpour Eco Pants FZ - Men's", // 3
	"Outdoor Research Ferrosi Pants - Men's", // 4
	"Mon pantalon unicorn" // 5
];

// 2. Accès à un élément spécifique du tableau
console.log(pantalons[2]); // "MEC Hydrofoil Stretch Pants - Men's"

// 3. Quantité d'éléments dans un tableau
console.log(pantalons.length);

// 4. Mise en place d'une boucle simple pour i = 0, 1, 2, 3 
// 6. Condition de sortie dynamique, basée sur la quantité d'éléments (.length)
for (var i = 0; i < pantalons.length; i = i + 1) {
	// 5. Utilisation de la variable i comme index
	console.log(pantalons[i]);
}
