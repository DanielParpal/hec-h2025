// Petit récapitulatif des tableaux en JS
var pantalons = [
	"Stretch Ozonic Pant de Mountain Hardwear - Hommes",
	"Pantalon Hydrocycle de MEC - Hommes",
	"Pantalon de pluie AQUANATOR de MEC - Hommes"
];

// Modélisation des propriétés d'un pantalon grâce à l'objet
var pantalonA = {
	prix: 109.97,
	titre: "Stretch Ozonic Pant de Mountain Hardwear - Hommes",
	evaluation: 2.2
};

console.log(pantalonA);

// On peut accéder à un élément spécifique grâce à sa propriété (sa clé)
// Elle est spécifiée comme une chaîne de caractères entre crochets carrés
console.log(pantalonA["titre"]);

// Ou sinon, de manière alternative, avec la notation point (dot notation)
console.log(pantalonA.titre);

// Si on souhaite modifier la valeur d'une des propriétés, on se sert
// des crochets carrés également
pantalonA["evaluation"] = 2.5;
console.log(pantalonA);

// Si on souhaite ajouter une nouvelle paire clé-valeur
pantalonA["imageURL"] = "images/abc.jpeg";
console.log(pantalonA);



// Ce qui est dessous est relié à une question posée en cours

// var titres = [
// 	"Stretch Ozonic Pant de Mountain Hardwear - Hommes",
// 	"Pantalon Hydrocycle de MEC - Hommes",
// 	"Pantalon de pluie AQUANATOR de MEC - Hommes"
// ];

// var prix = [
// 	109.97,
// 	162.99,
// 	158.97
// ];

// var evaluations = [
// 	2.5,
// 	4,
// 	4.5
// ];

// for (var i = 0; i < titres.length; i = i + 1) {
// 	console.log(titres[i]);
// 	console.log(prix[i]);
// 	console.log(evaluations[i]);
// }

// var pantalons2 = [
// 	{
// 		prix: 109.97,
// 		titre: "Stretch Ozonic Pant de Mountain Hardwear - Hommes",
// 		evaluation: 2.2
// 	},
// 	{
// 		prix: 109.97,
// 		titre: "Stretch Ozonic Pant de Mountain Hardwear - Hommes",
// 		evaluation: 2.2
// 	},
// 	{
// 		prix: 109.97,
// 		titre: "Stretch Ozonic Pant de Mountain Hardwear - Hommes",
// 		evaluation: 2.2
// 	}
// ];

// for (var i = 0; i < pantalons2.length; i = i + 1) {
// 	console.log(pantalons2[i]["prix"]);
// 	console.log(pantalons2[i]["titre"]);
// 	console.log(pantalons2[i]["evaluation"]);
// }




