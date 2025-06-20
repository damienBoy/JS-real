let myAge = 17;
console.log(myAge);


let maChaineDeTexte = "bla bla blaaa";
console.log(maChaineDeTexte);

// combo :
console.log("Bonjour voici mon age :",myAge,maChaineDeTexte);


let ilFaitBeau = true;
console.log(ilFaitBeau);

let testBoolean = 2 < 12
console.log(testBoolean);

let raceChien = { nom: "Spot", breed: "Dalmatian" };
console.log(raceChien);

let variableVide = null;
console.log(variableVide);



// exercice 1

let varPrenom = "Hugo ";
let varAge = 30;
let varPhrase = "Bonjour " + varPrenom + "tu as " + varAge + "ans aujourd'hui, c'est la fiesta!";

console.log(varPhrase);


// exercice 2 : tableaux

// let tab1 = ["et voila, " , 53];
// // je veux afficher le "53" dans la console
// console.log(tab1[1]);

// let phrase = "une petite phrase";
// // je veux afficher le "i" dans la console
// console.log(phrase[7]);


// let array1 = [tab1 , phrase];
// // je veux afficher "et voilà, " "une petite phrase"
// console.log(array1);

let phrase = "une petite phrase";
let tab1 = ["et voila, " , 53 , "heureux?"];
let tab2 = [6,42,23,"coucouuuuu"];
let array1 = [tab1 , tab2 , phrase];

console.log(array1[0][2] , array1[0][1] , array1[1][1] , tab1[length]);


//  exercice 3 trouver les initiales

let nom = "BOY";
let prenom = "Damien";
let tableauPhrase = [nom,prenom,nom[0]+prenom[0]];

console.log(tableauPhrase);


// exercice 4

let doctorWho = ["Doctor Who" , "extraterrestre"];   
let doctorHouse = ["Docteur House" , "misanthrope"];
let doctorQuinn = ["Docteur Quinn" , "femme médecin"];

let Docteurs = [doctorWho,doctorHouse,doctorQuinn];

console.log(Docteurs);
console.log(Docteurs[1][1]);
console.log(Docteurs[0].pop());
console.log(doctorWho);
doctorWho.push("extraterrestre");
console.log(doctorWho);

