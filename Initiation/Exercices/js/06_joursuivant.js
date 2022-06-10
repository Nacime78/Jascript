// var jour = prompt("Quel jour sommes-nous ?");
// if(jour === "lundi"){
//     document.write("Demain nous serons mardi...");
// }else if(jour === "mardi"){
//     document.write("Demain nous serons mercredi...");
// }else if(jour === "mercredi"){
//     document.write("Demain nous serons jeudi...");
// }else if(jour === "jeudi"){
//     document.write("Demain nous serons vendredi...");
// }else if(jour === "vendredi"){
//     document.write("Demain nous serons samedi...");
// }else if(jour === "samedi"){
//     document.write("Demain nous serons dimanche...");
// }else if(jour === "dimanche"){
//     document.write("Demain nous serons lundi...");
// }else{
//     document.write("Jour inconnu...");
// }

switch("jour"){
    case "Lundi":
        console.log("Demain on est mardi");
        break;
        case "mardi":
            console.log("Demain on est mercredi");
        break;
        case "mercredi": console.log("Demain on est jeudi");
        break;
        case "jeudi": console.log("Demain on est vendredi");
        break;
        case "vendredi": console.log("Demain on est samedi");
        break;
        case "samedi": console.log("Demain on est dimanche");
        break;
        case "dimanche": console.log("Demain on est lundi");
        break;

        default:
            console.log("Désolé, vérifiez l'orthographe et veuillez écrire sans majuscule");
}
