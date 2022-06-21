// var j = parseInt(prompt("Entrez un chiffre"));

// for(var i = 1; i <= 10; i++){
//     if(j >= 2 && j <= 9){
//             document.write("<h3>" + i + "*" + j + "=" + i*j + "</h3>");
//     }else{
//         document.write("Entrez un nombre valide");
//         break;
//     }
// }

// Correction ---------------------------------

var choix = prompt("Choisis un nombre");

for(var i = 1; i <= 10; i++){
    var resultat = choix * i;
    document.write(choix + " x " + i + " = " + resultat + "<br />");
}

