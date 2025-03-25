<?php 

// En JS, on utilise les guillemets (simples ou doubles) comme délimiteurs
// En PHP, ces délimiteurs sont les mêmes

$prenom = "Daniel";
echo $prenom;
echo "<br>";

$nom_de_famille = 'Parpal';
echo $nom_de_famille;
echo "<br>";

// En JS -> l'utilisation de guillemets simples ou doubles
// ne change rien à l'interpolation
// Par contre, en PHP, on peut interpoler avec les guillemets doubles
echo 'Bonsoir, $prenom $nom_de_famille';
echo "<br>";
echo "Bonsoir, $prenom $nom_de_famille";
echo "<br>";

// Concaténation (en JS: on avait le +)
// En PHP, on utilise le .
echo 'Bonsoir, ' . $prenom . ' ' . $nom_de_famille;
echo "<br>";

?>

