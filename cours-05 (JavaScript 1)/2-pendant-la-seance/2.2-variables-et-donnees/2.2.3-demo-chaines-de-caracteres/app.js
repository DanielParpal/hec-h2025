var prenom = 'Daniel';
console.log(prenom);

var nomDeFamille = 'Parpal';
console.log(nomDeFamille);

// Concaténation
console.log("Bonjour, " + prenom + ' ' + nomDeFamille);

// Pourquoi utiliser un certain délimiteur?
// Pour se rendre la vie facile si on utilise
// déjà un type de guillemet
var message1 = "J'ai faim";
var message2 = 'Il a dit: "Bravo"';
// Si (de manière exceptionnelle), les deux types
// de guillemets sont utilisés à l'intérieur, je
// me sers de l'échappement
var message3 = 'Il a dit: "J\'ai faim"';
console.log(message3);