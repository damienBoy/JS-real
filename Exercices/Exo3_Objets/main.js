var voiture = {
    "nbChveaux": 500,
    "vitesseMax": 450,
    "faiblesse": ["accélération", "adhérence"],
    "pilotes": {
        "pilote": "Jack",
        "copilote": "Jeannine"
    },
    "couleurs": {
        "bleu": {
            "capot": {
                "capotAvant": "clair",
                "capotArriere": "nuit"
            }
        },
        "rouge": {
            "retroGauche": "oui",
            "retroDroit": "non"
        }
    }
}




let afficher = "vitesseMax";
let montrer = "adhérence";
let afficher2 = "nbChveaux"

console.log(voiture.vitesseMax);
console.log(voiture["vitesseMax"]);
console.log(voiture[afficher]);
console.log(voiture.faiblesse[1]);

console.log(voiture.nbChveaux);
console.log(voiture.faiblesse[0]);
console.log(voiture[afficher2]);

// aller chercher "nuit"
console.log(voiture.couleurs.bleu.capot.capotArriere);



// 
// 



const groupe1 = ["José" , "Hélène" , "Nat"];
const groupe2 = ["Chris" , "Nico" , "Joanna"];

groupe2.push("nonohaha");

const liste  = ["babyNoa" , ...groupe2 , "pizzaNoa" , "cocaNoa", ...groupe1];

console.log(liste);