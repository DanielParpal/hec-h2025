// 2. Modélisez une recette sous la forme d'objet, et assignez-la à une nouvelle variable nommée recette_A.
// Note : vous aurez besoin des clés titre, description et url pour construire votre objet.
var recette_A = {
	titre: "Blondies aux pommes et chocolat au lait",
	description: "Signé Chocolats Favoris",
	url: "https://www.chocolatsfavoris.com/recettes/blondies-aux-pommes-et-chocolat-au-lait"
};

// 3. Affichez votre objet dans la console.
console.log(recette_A);

// 4. Affichez le titre de votre recette dans la console.
console.log(recette_A["titre"]);

// 5. Affichez sa description.
console.log(recette_A["description"]);

// 6. Modélisez une autre recette sous la forme d'objet, et assignez-là à une nouvelle variable nommée recette_B.
var recette_B = {
	titre: "Gâteau épicé à la citrouille avec glaçage au chocolat blanc",
	description: "Mordez dans l'automne à pleines dents! Vive la citrouille!",
	url: "https://www.chocolatsfavoris.com/recettes/gateau-epice-a-la-citrouille-avec-glacage-au-chocolat-blanc"
};

// 7. Affichez votre objet dans la console.
console.log(recette_B);

// 8. Mettez en place une condition : 
// - si le url de la recette B est une chaîne de caractères vide, affichez dans la console : le lien est brisé pour la recette B
// - sinon, affichez dans la console le lien url vers la recette B
// Assurez-vous de tester votre condition avec différentes valeurs de url.
if (recette_B["url"] == "") {
	console.log("Le lien est brisé pour la recette B");
} else {
	console.log(recette_B["url"]);
}


// une chaîne de caractères vide est définie avec deux guillemets consécutifs sans espace
// ""