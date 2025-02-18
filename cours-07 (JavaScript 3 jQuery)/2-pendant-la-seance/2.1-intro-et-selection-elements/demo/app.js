// Sélection d'éléments (HTML) -> 3 types de sélecteur
// L'utilisation de la méthode (action) .html(), qui 
// permet de remplacer le contenu html de la sélection
// Sélecteur de type élément
$("p").html("Bonsoir <span>groupe</span>");

// Sélecteur de type class
$(".feedback-error").html("Comment allez-vous");

// Sélecteur de type id
var monNouveauTexte = "Hola";
$("#first-error").html(monNouveauTexte);
