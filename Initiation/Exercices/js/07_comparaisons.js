var nombre1 = parseInt(prompt("Entrez un premier nombre"));
var nombre2 = parseInt(prompt("Entrez une second nombre"));

if ( (!isNaN(nombre1)) && (!isNaN(nombre2)) ){
    if(nombre1 < nombre2){
        document.write("Votre 1er nombre : " + nombre1 + " est plus petit que votre second : " + nombre2);
    }else if(nombre1 > nombre2){
        document.write("Votre 1er nombre : " + nombre1 + " est plus grand que votre second : " + nombre2);
    }else{
        document.write("Votre 1er nombre : " + nombre1 + " est égal à votre second : " + nombre2);
    }
}else{
    alert("vous n'avez pas saisi de chiffre(s)");
}