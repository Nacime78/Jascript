// alert("Saumon")

// LES BOUCLES

// -- La boucle FOR

// for (3 arguments){
//     ... code ...
// }

// 1. initialise un compteur à partir de combien je compte (par défaut le compteur est la variable (i))
// 2. la condition à vérifier qui doit donc être VRAI (TRUE)
// 3. le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc ++)

for (var i=1; i<=10; i+=2){
    document.write("<p>Instruction exécutée : " + i + "</p>");
}

// -- La boucle WHILE (tant que)
// trés utilisée quand on ne connait pas le nombre de tours de boucles à l'avance

var j = 1;
while(j <= 10){
    document.write("<hr /> <p>Instruction exécutée : " + j + "</p>");
    // j++
    // j = j + 1;
    // ou
    j += 1;
}

// -------------------------------------------------

/* EXERCICE

j'ai 1000 euros sur mon compte
chaque mois j'ajoute 50 euros
combien de temps me faut-il pour avoir 2000 euros

*/

// var j = 1000;
// var i = 1;
// while(j <= 2000){
//     document.write("<p>Après " + i + " mois vous avez " + j + " sur votre compte</p>");
//     j += 50;
//     i++;
// }

// Correction 

var monCompte = 1000;
var temps = 0;

while(monCompte < 2000){
    monCompte += 50;
    temps++;
}

// document.write() /!\ LE DOCUMENT WRITE EST HORS DE LA BOUCLE
document.write("<h3> Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3> Jusqu'à 2000 euros, il me faut : " + temps + " mois </h3>");

// avec une boucle FOR

var tps = 0;
for (var mesSous = 1000; mesSous < 2000; mesSous += 50){
    document.write("<h3>Le mois suivant j'ai : " + mesSous + " </h3>");
    tps++;
}  
document.write("<h3>Il aura fallu " + tps + " mois </h3>")

// FIN