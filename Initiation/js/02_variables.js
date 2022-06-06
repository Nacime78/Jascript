// alert("Nouha");
// -- 1. Addition
// -- INFO -- Je peux déclarer plusieurs variables à la suite
//  je décalre mes variables
var nb1, nb2, resultat;
// j'affiche des valeurs
nb1 = 10;
nb2 = 5;
// j'utiilise mes variables avec un calcul
resultat = nb1 + nb2;
// j'affiche mon résultat dans la console
console.log(resultat);
// -- 2. Soustraction
// -- Soustraction de nb1 - nb2 avec l'opérateur " - "
resultat = nb1 - nb2;
console.log(resultat);
// -- 3. Multiplication
// -- Multiplication de nb1 * nb2 avec l'opérateur "*"
resultat = nb1 * nb2;
console.log(resultat);
// 4. Division
// -- Division avec l'opérateur  "/"
resultat = nb1 / nb2;
console.log(resultat);
// 5. Modulo
// -- le modulo retourne le reste d'une Division
// -- modulo de nb1 % nb2 avec l'opérateur "%"
resultat = nb1 % nb2;
console.log(resultat);
// -- et
// alert("hello");
var a = 2;
a = a - 1;
console.log("var a doit être à 1 :" + a);
a++;
console.log("var a doit être à  2 :" + a);
var b = 8;
b += 2;
console.log("var b doit être à 10 : " + b);
var c = a + b * b;
console.log("var c doit être à 102 : " + c);
var d = a * b + b;
console.log("var d doit être à 30 : " + d);
var e = a * (b + b);
console.log("var e doit être à 40 : " + e);
var f = a * b / a;
console.log("var f doit être à 10 : " + f);
var g = b / a * a;
console.log("var g doit être à 10 : " + g);

// ------------ conversion ---------------

var tempC = prompt("Température en Celsius : ");
// console.log("1° Celsius vaut " + ((1 * 1.8) + 32) + "Fahrenheit.")
// document.write("<h4>Résultat : <br /> 1° Celsius vaut " + ((1 * 1.8) + 32) + " Fahrenheit. </h4>");
// console.log(tempC + "° Celsius = " + (tempC * 1.8 + 32) + "Fahrenheit.");
document.write("<h4>" + tempC + "° Celsius = " + ((tempC * 1.8) + 32) + " Fahrenheit. </h4>");
var tempF = (tempC * 1.8) + 32;
console.log("1° Fahrenheit vaut " + ((1 * 1.8) + 32) + " Celsius.");
document.write("<h4>1° fahrenheit vaut " ((1 * 1.8) + 32) + " Celsius. </h4>");
console.log(tempF + "° Fahrenheit = " + ((tempF - 32) / 1.8) + " Celsius.");
document.write("<h4>" + tempF + "° Fahrenheit = " + ((tempF - 32) / 1.8) + "Celsius. </h4>");