<?php 

// définition d'un tableau (crochets carrés)
// syntaxe très similaire au JS
$produits = [
	"t-shirt",
	"chapeau",
	"paire de bas"
];

// j'utilise la commande var_dump() à des fins de diagnostic
var_dump($produits);
echo "<br>";

// ajout d'un élément après la définition initiale
$produits[] = "chandail";
var_dump($produits);
echo "<br>";

// pour modifier un élément (idem au JS, on se sert de l'index)
$produits[1] = "casquette";
var_dump($produits);
echo "<br>";

// pour connaître la quantité d'éléments
echo count($produits);
echo "<br>";

?>

