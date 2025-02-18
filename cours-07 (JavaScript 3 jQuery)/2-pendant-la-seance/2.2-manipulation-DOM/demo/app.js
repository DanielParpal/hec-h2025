// Sélection de la bannière verte
// On utilise l'identifiant (id) pour la sélection
// On affiche avec .show()
// éléments de type block -> display: block;
// éléments de type inline -> display: inline;
$("#alerte-avec-rabais-20").show();

// On veut masquer la bannière rouge
// .hide() -> display: none;
$("#alerte-sans-rabais-20").hide();

// Une autre méthode: .append()
// Cela permet d'ajouter du contenu (au lieu de le remplacer)
// Le contenu est ajouté à la fin de chacun des éléments sélectionnés
// je vous encourage à essayer le .prepend()
$(".alerte-pour-test").append("ASDFASF");
