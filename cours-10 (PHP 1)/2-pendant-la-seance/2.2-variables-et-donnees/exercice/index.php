<!-- 1. Créez un fichier PHP (extension .php)

2. Définissez les balises PHP

3. Définition et utilisation du titre
3.1 Définissez la variable $titre, et donnez-lui la valeur 'Chandail pour garçons'
3.2 Affichez le titre à l'écran (avec echo)
3.3 Affichez le titre dans un contexte (ex. Le titre est : ... )
Note : pour insérer un saut de ligne, utilisez : echo '<br>';

4. Définition et utilisation de la description
4.1 Définissez la variable $description, et donnez-lui la valeur 'Collection Zara :<br>Cardigan pour garçons, disponibles en différentes tailles.'
4.2 Affichez la description à l'écran
4.3. Observez le saut de ligne entre 'Zara :' et 'Cardigan'
     Pourquoi est-il présent? Aviez-vous remarqué la balise HTML <br>?
     
5. Définition et utilisation de la quantité
5.1 Définissez la variable $quantite et donnez lui la valeur 4
5.2 Affichez sa valeur dans un contexte (ex. La quantité restante est : ...)
5.3 Diminuez la quantité de 2 à l'aide d'une soustraction
5.4 Affichez sa valeur dans un contexte (ex. La nouvelle quantité est : ...)

6. Définition et utilisation des tailles
6.1 Définissez la variable $tailles (qui sera un tableau), et donnez-lui les valeurs 'S', 'M' et 'L'
6.2 Affichez les tailles grâce à la commande var_dump()
6.3 Ajoutez la taille 'XL' au tableau
6.4 Affichez la quantité d'éléments dans le tableau à l'aide de count()
6.5 Affichez le tableau à nouveau grâce à var_dump()
      -->

<?php 

// étape 3
$titre = 'Chandail pour garçons';
echo "Le titre est: $titre";
echo '<br>';

// étape 4
$description = 'Collection Zara :<br>Cardigan pour garçons, disponibles en différentes tailles.';
echo 'La description est: ' . $description;
echo '<br>';

// étape 5
$quantite = 4;
echo "La quantité est: $quantite<br>";
$quantite = $quantite - 2;
echo "La quantité mise à jour est: $quantite<br>";

// étape 6
$tailles = [
     'S', 'M', 'L'
];
var_dump($tailles);
echo '<br>';
$tailles[] = 'XL';
var_dump($tailles);
echo '<br>';
echo count($tailles);



?>








