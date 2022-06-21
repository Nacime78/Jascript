// var saisi = parseInt(prompt("Entrez un nombre"));

// while((saisi <= 50) && (saisi >= 100)){
//     var saisi = parseInt(prompt("Entrez un nombre"));
// }

// Correction
// var nombre = parseInt(prompt("Entrez un nombre"))
// while(nombre > 50 && nombre < 100){
//     alert("Le nombre :" + nombre + "que vous avez saisi est compris entre 50 et 100");
//     nombre = prompt("Entrez un nombre entre 50 et 100 :");
// }

// deuxième méthode avec l'inverse
// var nombre = parseInt(prompt("Entrez un nombre"));
// while(nombre <= 50 || nombre >= 100){
//     alert("Vous avez saisie " + nombre + " n'appartient pas à l'intervalle 50 et 100");
//     nombre = prompt("Entrez un nombre entre 50 et 100 :");
// }

// troisième méthode avec boucle while + dedans if et else
var nombre = parseInt(prompt("Entrez un nombre entre 50 et 100"))
while(nombre != 'quitter'){
    if(nombre >= 50 && nombre <= 100){
        alert("Le nombre : " + nombre + " que vous avez saisi est compris entre 50 et 100");
        nombre = prompt("Entrez un nombre 'quitter' pour quitter");
    }else if(nombre < 50 || nombre > 100){
        alert("Vous avez saisi " + nombre + " n'appartient pas à l'intervalle 50 et 100");
        nombre = prompt("Entrez un nombre 'quitter' pour quitter ");
    }else{
        alert("Erreur entrez un nombre correct");
        nombre = prompt("Entrez un nombre entre 50 et 100");
    }
}