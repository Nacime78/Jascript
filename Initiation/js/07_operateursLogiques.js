// alert("hey")

// L'opérateur ET : && ou AND

// -- si je cumule 2 conditions :
// => prenom === prenomLogin
// => monAge === ageLogin
// pour que les 2 correspondent pour être validés il faut les associer
if ( (prenomLogin === prenom) && (ageLogin === monAge) ){
    // ... Code ...
    // je ne rentre ici que si les 2 conditions sont vraies
}

if ((A) && (B)){
    // => si A est FAUX et B est VRAI  => FAUX
    // => si A est VRAI et B est FAUX  => FAUX
    // => si A est FAUX et B est FAUX  => FAUX
    // => si A est VRAI et B est VRAI  => VRAI
} 

// ---------------------------------------------------

// L'opérateur OU : || ou OR (| pipe => alt gr + 6)

if ((C) || (D)){

    // => si C est FAUX et B est FAUX => FAUX
    // => si C est FAUX et B est VRAI => VRAI
    // => si C est VRAI et B est FAUX => VRAI
    // => si C est VRAI et B est VRAI => VRAI

}

// L'opérateur "!" signifie : le contraire de 
var utilisateurLog = true;
if(!utilisateurLog){
    // si l'utilisateur n'est pas Loggé.
}

// ce qui revient à écrire :
if (utilisateurLog == false){
    // si l'utilisateur
}