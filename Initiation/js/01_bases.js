// Syntaxe de base

// commentaire sur une ligne

/* Ici je fais un commentaire sur
plusieurs lignes
*/

// -- 1: Déclarer une variable en JS
var Prenom;

// -- 2: Affecter une valeur à une variable
Prenom = "Nouha";

var Prenom = "Nouha";

// -- 3: Une instruction se termine TOUJOURS par un point-virgule, aussi il est possible d'écrire plusieurs instructions sur une seule ligne
// inst_1;
// inst_2; inst_3;

// -- 4: Afficher une boîte de dialogue (2 façons)
// alert("Super, tu es arrivé sur mon site !");
// window.alert("Super, tu es arrivé sur mon site !")

// -- 5: Afficher dans la console (ici, la valeur de ma variable Prenom)
console.log(Prenom);

// -- 6: Afficher dans la page web 
// document.write("A la pause vous aurez des haribos pik")

// -- 7: Demander à l'utilisateur une valeur (2 façons)
// window.prompt("Question: on est quel jour ?", "jour de la semaine");
// prompt("Question: on est quel jour ?", "jour de la semaine");

// -- et pour manipuler cette valeur, je n'oublie pas de la stocker 
// var jour = prompt("Question: on est quel jour ?", "jour de la semaine");
// console.log(jour);

// -- 8: Attention /!\ Le JS est sensible à la casse ('case sensitive')
// mavariable =/= maVariable =/= ma_variable camel case snake case

// -- 9: Une variable ne peut pas commencer par  un chiffre, ne doit contenir que des caractères alphanumérique, et ne peut pas être un mot réservé (var, for... des éléments natifs du langage JS)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// --10: Une variable peut être déclarée de façon explicite:
var fruit;
var fruit = "fraise";
// ou implicite;
var fruit_2 = "coco";
haribo = "Tagada";

/*------------------------------------------------------/
/~~~~~~~~~~~~~~ Les TYPES DE VARIABLES ~~~~~~~~~~~~~~~~/
------------------------------------------------------*/

// -- 1. Chaîne de caractères (string)
var vacances = "2022";
var destination = "Maldive";

// -- 2. Un nombre entier (integer ou int)
var annee = 2022;

// -- 3. Un nombre décimal (float)
var nombre_a_virgule = -5.32;

// -- 4. Un booléen (boolean = VRAI ou FAUX = TRUE or FALSE)
var unBooleen = false; // -- true

// -- 5. Les Constantes

// la déclaration const permet de créer une constante accessible unique en lecture. Contrairement à une variable sa valeur ne peut plus être modifiée par réaffectation plus bas dans le code.
// Une constante ne peut pas être déclarée à nouveau dans le même script.

//  -- Par convention les constantes sont en majuscules
const PAYS = "France"; // string
const AN = '2022'; // string
const BIRTH = 2022; // nombre 

// -- 6. typeof permet de connaitre le type de ma variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

// En JS Les variables sont auto-typées
// ON peut convertir une variable de type NUMBEr en STRING et aussi STRING en NUMBER avec les fonctions natives de JS
// -- la fonction parseInt() renvoie un entier à partir d'une de caractères

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// je ré-affecte une valeur
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => FLOAT
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_letters);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

// FIN

