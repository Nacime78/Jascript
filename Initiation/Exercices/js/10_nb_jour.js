// alert("bonjour");
// var mois = prompt("Entrez un nombre entre 1 et 12");
// if(mois === "1"){
//     document.write("Le nombre de jour que contient ce mois est 31");
// }else if(mois === "2"){
//     document.write("Le nombre de jour que contient ce mois est 28");
// }else if(mois === "3"){
//     document.write("Le nombre de jour que contient ce mois est 31");
// }else if(mois === "4"){
//     document.write("Le nombre de jour que contient ce mois est 30");
// }else if(mois === "5"){
//     document.write("Le nombre de jour que contient ce mois est 31");
// }else if(mois === "6"){
//     document.write("Le nombre de jour que contient ce mois est 30");
// }else if(mois === "7"){
//     document.write("Le nombre de jour que contient ce mois est 31");
// }else if(mois === "8"){
//     document.write("Le nombre de jour que contient ce mois est 31");
// }else if(mois === "9"){
//     document.write("Le nombre de jour que contient ce mois est 30");
// }else if(mois === "10"){
//     document.write("Le nombre de jour que contient ce mois est 31");
// }else if(mois === "11"){
//     document.write("Le nombre de jour que contient ce mois est 30");
// }else if(mois === "12"){
//     document.write("Le nombre de jour que contient ce mois est 31");
// }else{
//     document.write("Mois inconnu");
// }

var mois = parseInt(prompt("Entrez un nombre entre 1 et 12"));
var annee = parseInt(prompt("Entrez une année"));


if ( (!isNaN(mois)) && (!isNaN(annee)) ){
    if(mois === 2){
                if((annee % 400) !== 0 ){ 
                        document.write("Le nombre de jour du mois : " + mois + " de l'année : " + annee + " est 29 ");
                    }else if((annee % 4) === 0 ){
                        if(((annee / 4) % 100) === 0 ){
                            document.write("Le nombre de jour du mois : " + mois + " de l'année : " + annee + " est 28 ");
                        }else{
                            document.write("Le nombre de jour du mois : " + mois + " de l'année : " + annee + " est 29 ");
                        }
                    }else{
                        document.write("Le nombre de jour du mois : " + mois + " de l'année : " + annee + " est 28 ");
                    }
        }else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
            document.write("Le nombre de jour du mois : " + mois + " de l'année : " + annee + " est 30 ");
        }else if((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) ||(mois === 8) ||(mois === 10) ||(mois === 12)){
            document.write("Le nombre de jour du mois : " + mois + " de l'année : " + annee + " est 31 ");
        }else{
            document.write("Votre choix " + mois + " n'est pas dans le calendrier.");
        }        
}
else{
    document.write("Veuillez entrer des nombres valides")
}      

// var mois = parseInt(prompt("Quel mois choisissez-vous" , "<< saisir un chiffre entre 1 et 12 >>"));

// if (mois === 2){// si on a choisi février => chiffre 2
//     document.write("Le mois numéro " + mois + " Fait 28 jours.");
// }else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
//     document.write("Le mois numéro " + mois + " Fait 30 jours.");
// }else if((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) ||(mois === 8) ||(mois === 10) ||(mois === 12)){
//      document.write("Le mois numéro " + mois + " Fait 31 jours.");
// }else{
//     document.write("Votre choix " + mois + "n'est pas dans le calendrier.");
// }        
            
// program to check if a number is a float or integer value

// function checkNumber(x) {

//     // check if the passed value is a number
//     if(typeof x == 'number' && !isNaN(x)){
    
//         // check if it is integer
//         if (Number.isInteger(x)) {
//             console.log(`${x} is integer.`);
//         }
//         else {
//             console.log(`${x} is a float value.`);
//         }
    
//     } else {
//         console.log(`${x} is not a number`);
//     }
// }