// es2015 -> let, const -> portée des variables
// 1. var prix; (définition de la variable)
// 2. prix = 10; (assignation de la valeur)
// var prix;
// prix = 10;

// Forme condensée
var prix = 10;
// si je veux modifier la valeur (donc en assigner une nouvelle), je ne vais PAS utiliser le mot-clé var
prix = 20;

console.log(prix);

var taxes = 1.15;

console.log(prix * taxes);

// quiz: piège
var prix2 = 100;
prix2 = prix2 + 50;
console.log(prix2);
