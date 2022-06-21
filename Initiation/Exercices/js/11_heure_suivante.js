
// var heure = parseInt(prompt("Entrez un nombre entre 00 et 23 correspondant aux heures"));
// var minute = parseInt(prompt("Entrez un nombre entre 00 et 59, correspondant aux minutes"));
// var seconde = parseInt(prompt("Entrez un nombre entre 00 et 59, correspondant aux secondes"));

// if( seconde == 59 ){
//     if( minute == 59 ){
//         if( heure == 23 ){
//             document.write("L'heure qu'il sera 1 seconde plus tard est 00h00h00");
//         }else{
//         heure++
//         document.write("L'heure qu'il sera 1 seconde plus tard est " + heure +"/00/00");
//         }
//     }else{
//     minute++
//     document.write("L'heure qu'il sera 1 seconde plus tard est " + heure +"/" +minute+"/00");
//     }
// }else{
//     seconde++
//     document.write("L'heure qu'il sera 1 seconde plus tard est " + heure +"/" +minute+"/"+seconde);
// }

Correction

var heure = prompt("Entrez l'heure :")
var minute = prompt("Entrez les minutes :")
var seconde = prompt("Entrez les secondes :")

// on teste les cas d'erreur

if( (heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59) ){
    seconde ++; // on incrémente les secondes

    if(seconde === 60){ // ===
        // on met les secondes à 0 et passe à la minute suivante
        seconde = 0;
        minute++;

        if(minute === 60){ // ====
            minute = 0;
            heure++;

            if(heure === 24){
                // L'heure suivante est minuit
                heure = 0;
            }
        } 
    } // affichage de l'heure
    document.write("<h3>Dans une seconde il sera " + heure +"h"+ minute +"m"+ seconde +"s </h3>");
}
else{
    // heure incorrecte
    document.write("Heure incorrecte ! ");
}

