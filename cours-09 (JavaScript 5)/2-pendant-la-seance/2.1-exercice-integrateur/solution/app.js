// MODÉLISATION DES DONNÉES
var tailles = [5, 6, 7, 8, 9, 10];

var botteA = {
	marque: 'UGG',
	nom: 'CLASSIC MINI PLATFORM Women',
	imageSrc: 'images/ugg-classic-mini-platform.jpeg',
	imageAlt: 'Ugg classic mini platform',
	taillesDispo: [5, 8]
};

var botteB = {
	marque: 'UGG',
	nom: 'NEUMEL PLATFORM Women',
	imageSrc: 'images/ugg-neumel-platform.jpeg',
	imageAlt: 'Ugg neumel platform',
	taillesDispo: [5, 6, 8, 10]
};

var botteC = {
	marque: 'UGG',
	nom: 'CLASSIC MINI II Women',
	imageSrc: 'images/ugg-classic-mini-ii.jpeg',
	imageAlt: 'Ugg classic mini ii',
	taillesDispo: [7, 8, 9, 10]
};

var botteD = {
	marque: 'UGG',
	nom: 'CLASSIC ULTRA MINI Women',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [6, 9]
};

var bottes = [
botteA, botteB, botteC, botteD,
];

console.log(bottes);

// Votre code viendra ci-dessous

// GÉNÉRATION DE L'ÉTAT INITIAL DE LA PAGE DE MANIÈRE DYNAMIQUE
// Générer les n boutons
for (var i = 0; i < tailles.length; i = i + 1) {
	$('#boutonsFiltreTaille').append('<button data-taille="' + tailles[i] + '" type="button" class="btn btn-outline-dark btn-taille mr-2">' + tailles[i] + '</button>');
}

// Générer les m bottes
for (var i = 0; i < bottes.length; i = i + 1) {
	var carte = '<div class="col-3">';
	carte = carte + '<div class="card" style="width: 100%;">';
	carte = carte + '<img src="' + bottes[i]['imageSrc'] + '" class="card-img-top img-fluid" alt="' + bottes[i]['imageAlt'] + '" />';
	carte = carte + '<div class="card-body">';
	carte = carte + '<h5 class="card-title">' + bottes[i]['marque'] + '</h5>';
	carte = carte + '<p class="card-text">' + bottes[i]['nom'] + '</p>';
	carte = carte + '<a href="#" class="btn btn-dark btn-ajout-panier">Ajouter</a>';
	carte = carte + '</div></div></div>';

	// dans un 2ème temps, on ajoute le HTML au DOM (.append())
	$("#produits").append(carte);
}


// DÉFINITION DES ALGORITHMES DYNAMIQUES

// On doit définir les variables qui sont partagées par plusieurs
// gestionnaires d'événement à l'extérieur des fonctions.
var tailleCliquee;
// vous aurez à faire la même chose pour la couleur sélectionnée

// Pseudocode (très haut niveau)
// au moment du clic sur un bouton de taille
	// on récupère la taille cliquée
	// 	  pour toutes les bottes qui ont la taille en stock
	// 		generer une carte à partir des données sources

// On définit un gestionnaire d'événements pour observer
// les clics sur les éléments avec la classe .btn-taille
$(".btn-taille").on('click', function() {

	// On modifie l'apparence du bouton sélectionné
	// On utilise la stratégie commune de redonner un état initial
	// puis d'appliquer les changements
	$(".btn-taille").removeClass('btn-dark');
	$(".btn-taille").addClass('btn-outline-dark');
	$(this).removeClass('btn-outline-dark');
	$(this).addClass('btn-dark');

	// On récupère la valeur de l'attribut data-taille du
	// bouton venant d'être cliqué
	tailleCliquee = $(this).data("taille"); // suite de data-
	console.log(tailleCliquee);

	// On vide la division contenant les bottes
	$("#produits").html("");

	// On met en place une boucle pour parcourir le tableau de bottes
	for (var i = 0; i < bottes.length; i = i + 1) {
		// les tailles disponibles pour la botte incluent-elles la 
		// taille sélectionnée (celle qui vient d'être cliquée)?
		// voir cours 5 .includes
		// voir cours 8 tableau objet
		if (bottes[i]["taillesDispo"].includes(tailleCliquee)) {
			// afficher les bottes qui ont la taille en stock
			// dans un premier temps, on construit tout le HTML
			var carte = '<div class="col-3">';
			carte = carte + '<div class="card" style="width: 100%;">';
			carte = carte + '<img src="' + bottes[i]['imageSrc'] + '" class="card-img-top img-fluid" alt="' + bottes[i]['imageAlt'] + '" />';
			carte = carte + '<div class="card-body">';
			carte = carte + '<h5 class="card-title">' + bottes[i]['marque'] + '</h5>';
			carte = carte + '<p class="card-text">' + bottes[i]['nom'] + '</p>';
			carte = carte + '<a href="#" class="btn btn-dark btn-ajout-panier">Ajouter</a>';
			carte = carte + '</div></div></div>';

			// dans un 2ème temps, on ajoute le HTML au DOM (.append())
			$("#produits").append(carte);
		}
	}
});

// 2ème gestionnaire d'événements -> celui-ci pour le clic sur Ajouter
$('#btn-ajout-panier').on('click', function() {
	console.log('la taille sélectionnée est: ' + tailleCliquee);
});

// Ceci serait un équivalent 1:1
// $('#btn-ajout-panier').click(function() {
// 	console.log('la taille sélectionnée est: ' + tailleCliquee);
// });

// petit rappel du .includes (cours 5, partie sur les tableaux)
// var produits = [
// 	"jeans",
// 	"chandail",
// 	"casquette"
// ];

// console.log(produits.includes("jeans")); // true
// console.log(produits.includes("bas")); // false

// portée des variables
// espace global

var prenom = "Vanessa";

function testA() {
	var prix = 100;
}

function testB() {
	console.log(prix); // variable prix non définie
	console.log(prenom); // "Vanessa"
}












