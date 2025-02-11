// mise en place d'une boucle
// il y a 3 expressions dans la définition de la boucle
// chacune des expressions est séparée par un point-virgule
// écrire: 1, 2, 3, 4 dans la console
for (var i = 1; i < 5; i = i + 1) {
	// Le code entre les accolades sera exécuté
	// pour chacune des itérations
	console.log(i);
}

// deuxième exemple
// On verrait 1, 0, -1, -2, -3, ...
// ici on aurait une boucle infinie
// for (var i = 1; i < 5; i = i - 1) {
// 	console.log(i);
// }

// en pseudocode, le deuxième exemple correspond à ceci
// var i = 1; // étape 1 de notre digramme 

// console.log(i); // on voit 1
// i = i - 1; // étape 3 -> i vaut maintenant 0
// if (i < 5) continue;

// console.log(i); // on voit 0
// i = i - 1; // étape 3 -> i vaut maintenant -1
// if (i < 5) continue;

// console.log(i); // on voit -1
// i = i - 1; // étape 3 -> i vaut maintenant -2
// if (i < 5) continue;

// console.log(i); // on voit -2
// i = i - 1; // étape 3 -> i vaut maintenant -3

console.log("===============");

for (var i = 0; i <= 10; i = i + 2) {
	console.log("Bonsoir: " + i);
}

// Ceci serait une boucle infinie car on n'assigne
// pas la valeur à i
// for (var i = 0; i < 5; i + 1) {
// 	console.log("Bonsoir: " + i);
// }






