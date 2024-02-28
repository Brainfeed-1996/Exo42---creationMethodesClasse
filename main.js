// Définition de la classe
class Livre {
  constructor(titre, auteur, nbPages) {
    this.titre = titre;
    this.auteur = auteur;
    this.nbPages = nbPages;
  }
  affichage1() {
    console.log(
      "J'ai lu " +
        this.titre +
        " de " +
        this.auteur +
        " qui contient " +
        this.nbPages +
        " pages"
    );
  }
  affichage2(nom) {
    console.log("J'ai lu " + this.titre + " " + nom);
  }
}
//Appel d'une instance de class pour créer un nouvel objet livre
let monLivre = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 120);
console.log(monLivre);

let livre2 = new Livre("La tour sombre", "Stephen King", 240);

console.log(livre2);

monLivre.affichage1();
livre2.affichage2("Olivier Robert-Duboille");
