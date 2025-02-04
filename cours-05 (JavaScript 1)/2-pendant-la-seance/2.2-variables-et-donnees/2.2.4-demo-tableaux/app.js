// le tableau
var produits = [
	'jeans',
	'casquette',
	't-shirt'
];

console.log(produits);

// Si je veux accéder à un élément grâce à son index
console.log(produits[0]);

// Si je veux modifier un élément
produits[1] = 'chapeau';

// Si je veux connaître la quantité d'éléments
console.log("Vous avez " + produits.length + " item(s) dans votre panier");

// Si je veux savoir si mon tableau contient un élément
console.log(produits.includes("bas")); // vrai ou faux

// Si je veux ajouter des éléments après la définition
// initiale
produits.push('tuque');
console.log(produits);

// Quelque chose que je vois souvent et qui est 
// une erreur
// console.log([0]);

// Ceci ne pourrait pas fonctionner
// car on ne sait pas à l'avance
// combien d'éléments seront présents
// var produit1 = 'jeans';
// var produit2 = 'casquette';
// var produit3 = 't-shirt';






