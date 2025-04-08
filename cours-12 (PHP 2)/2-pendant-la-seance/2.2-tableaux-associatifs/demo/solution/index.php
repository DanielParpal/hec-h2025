<?php 

// En JS, nous avons vu l'objet, qui est une structure regroupant les propriétés apparentés 
// var titreCours1 = {
// 	nom: "X-Fit",
// 	instructeur: "Paul",
// 	date: "17 avril 2025"
// };

// Définition d'un tableau associatif
$titre_cours_1 = [
	"nom" => "X-Fit",
	"instructeur" => "Paul",
	"date" => "18 avril 2025"
];

$titre_cours_2 = [
	"nom" => "Yoga flow et musique",
	"instructeur" => "Martha",
	"date" => "25 avril 2025"
];

// $titres = [
// 	$titre_cours_1,
// 	$titre_cours_2
// ];

// Accéder à une propriété (lecture)
// echo $titre_cours_1["instructeur"];
// echo "<br>";
// echo $titre_cours_1["date"];
// echo "<br>";

// Modification de la valeur pour une propriété donnée
// $titre_cours_1["instructeur"] = "Jasmine";
// var_dump($titre_cours_1);
// echo "<br>";

// Ajout paire propriété-valeur
// $titre_cours_1["quantite_participants"] = 25;
// var_dump($titre_cours_1);
// echo "<br>";

include 'app.html.php';

?>


