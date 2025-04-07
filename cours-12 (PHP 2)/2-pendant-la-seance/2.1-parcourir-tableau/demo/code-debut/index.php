<?php 

// Reprenons la démonstration du cours 10, où on présente les derniers cours
// auxquels un client a participé.

// Définition du tableau des titres de cours
$titres = [
	"X-Fit",
	"Yoga flow avec musique",
	"Bootcamp et course"
];

// On peut utiliser var_dump() pour afficher le tableau à des
// fins de diagnostic
// var_dump($titres);

// Mettons en place une boucle pour afficher tous les titres (sans HTML pour débuter)
// Nous commenterons cette section par la suite
// foreach ($titres as $titre) {
// 	echo $titre . "<br>";
// }


// Effectuons l'inclusion du fichier d'affichage
include 'app.html.php';

?>

