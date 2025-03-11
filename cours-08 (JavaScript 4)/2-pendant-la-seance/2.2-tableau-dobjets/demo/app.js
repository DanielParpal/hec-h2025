// Modélisation des propriétés d'un pantalon grâce à l'objet
var pantalonA = {
	prix: 109.97,
	titre: "Stretch Ozonic Pant de Mountain Hardwear - Hommes",
	evaluation: 2.2
};

var pantalonB = {
	prix: 99.95,
	titre: "Pantalon Hydrocycle de MEC - Hommes",
	evaluation: 3
};

var pantalonC = {
	prix: 44.93,
	titre: "Pantalon de pluie AQUANATOR de MEC - Hommes",
	evaluation: 2.1
};

// définition du tableau d'objets
var pantalons = [
	pantalonA,
	pantalonB,
	pantalonC
];

// affichage du tableau d'objets
console.log(pantalons);

console.log(pantalons[0]); // pantalonA

console.log(pantalons[0]["titre"]); // le titre du pantalonA (Stretch Ozonic)

console.log(pantalons[1]["prix"]); // le prix du pantalonB (99.95)

for (var i = 0; i < pantalons.length; i = i + 1) {
	// en ouverture, à la maison: essayez de mettre en place un filtre (une condition à l'intérieur
	// de la boucle) pour afficher uniquement le titre des pantalons coûtant moins cher que 100$.
	console.log(pantalons[i]["prix"]);
	console.log(pantalons[i]["titre"]);
}
