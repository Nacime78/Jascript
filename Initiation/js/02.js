// alert("Hi");

/* 

    La Concaténation

*/

var annee = 2017; // à quoi sert une var, différents types de var 
var futur = 5;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul + "<br>");


var mois = "6";
var calcul2 = annee + mois;
console.log(calcul2); // -> <br> parce que pas de calcul avec des strings
document.write(calcul2 + " <br>");


var DebutPhrase = "Aujourd'hui ";
var NbStagiaires = 11;
var SuitePhrase = " stagiaires";
var FinPhrase = "Sont présents.";

document.write(DebutPhrase + NbStagiaires + SuitePhrase + " " + FinPhrase );
// le " " est utile quand on a des données récupérées directement de l'utilisateur 