document.getElementById("bouton").onclick = function () {
    document.getElementById("explanation").style.visibility = "hidden";
    document.getElementById("userInterface").style.visibility = "visible";
    console.log("le jeu commence");
    var nbTour = 0;
    var valeur = document.getElementById("setNumber");
    var nbAleatoire = Math.floor(Math.random() * 100 + 1);
    var resultat = document.getElementById("resultat");

    console.log("Nombre choisi par l'ordinateur: " + nbAleatoire);

    document.getElementById("validation").onclick = function () {
        nbTour++;
        document.getElementById("tour").innerHTML = nbTour;
        console.log("nombre de tour: " + nbTour);
        var nombre = valeur.value;
        console.log(nombre);
        if (nombre < 1 || nombre > 100 || isNaN(valeur.value)) {
            alert("Votre saisie est invalide");
        } else {
            if (Math.abs(nbAleatoire - nombre) > 5) {
                resultat.innerHTML += "<p>" + nombre + " C'est <span class='bleu'>froid</span></p>";
            } else if (nbAleatoire == nombre) {
                alert("Félicitation vous avez gagné");
                document.body.innerHTML = "<p id=fireWork>_</p>";
                console.log("Fin du jeu");
            } else {

                resultat.innerHTML += "<p>" + nombre + " C'est <span class='rouge'>chaud</span></p>";
            }
        }
        valeur.value = " ";
        if (nbTour == 5) {
            var nbmin = nbAleatoire - (nbAleatoire % 10);
            var nbmax = nbmin + 10;
            var indice = "Le nombre se situe entre " + nbmin + " et " + nbmax;
            console.log(indice);

        } else if (nbTour == 10) {
            alert("Désolé vous avez perdu!");

        }
    }
}
