// exercice 1 : calculer une moyenne

// let noteA = 14;
// let noteB = 8;

function moyenneNotes(noteA, noteB) {
  return (noteA + noteB) / 2
}

let moy = moyenneNotes(14, 8);

console.log(moy);


// exercice manip Math

let random = Math.random() * 2;

console.log(random);


// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let randooom = getRandomArbitrary(0, 1);

console.log(randooom);

// EXERCICE 2 : calculer une moyenne + mention

//  hard way :
function mentionBac(array) {
  let cumul = 0;
  for (let i = 0; i < array.length; i++) {
    cumul = cumul + array[i]
  }
  let moyenne = cumul / array.length;
  if (moyenne >= 15) {
    return "très bien"
  }
  else if (moyenne >= 10) {
    return "assez bien"
  }
  else return "refus"
}

console.log(mentionBac([18,19,14,15,18,10]));


// simple way :
function mentionBac([noteA,noteB,noteC]) {
  let moyenne = (noteA + noteB + noteC) /3;
  if (moyenne >= 15) {
    return "très bien"
  }
  else if (moyenne >= 10) {
    return "assez bien"
  }
  else return "refus"
}
console.log(mentionBac([8,9,14]));


// simple way #2:
function mention(note) {
  let moyenne = (note[0]+note[1]+note[2]) /note.length;
  if (moyenne >= 15) {
    return "très bien"
  }
  else if (moyenne >= 10) {
    return "assez bien"
  }
  else return "refus"
}

console.log(mention([9,9,10]));


// EXERCICE bonus 
// Demander deux nombres à l'utilisateur (avec prompt), les stocker dans deux variables
// Afficher le plus grand dans la console 
// Si les deux nombres sont égaux, afficher « Les deux nombres sont égaux ».

// let nbre1 = parseInt(prompt("donnez DEUX nombres svp"));
// let nbre2 = parseInt(prompt("donnez DEUX nombres svp"));
// parseInt permet de prendre une entrée en valeur chiffrée

// if (nbre1 > nbre2 ) {
//   console.log(nbre1);
// }
// else if (nbre1 < nbre2) {
//   console.log(nbre2);
// }
// else if (nbre1 == nbre2) {
//   console.log("Les deux nombres sont égaux");
// }

// correction :
// let comp1 = parseInt(prompt('Saisissez un premier nombre'));
// let comp2 = parseInt(prompt('Saisissez un deuxième nombre'));
// if (comp1 > comp2) {
//     console.log(comp1 + " est plus grand que " + comp2);
// } else if (comp1 < comp2) {
//     console.log(comp1 + " est plus petit que " + comp2);
// } else {
//     console.log(comp1 + " les deux nombres sont égaux");
// }


// BONUS #2

let i = 0;
let dessin = [];

while (i<10) {
  i++;
  dessin.push("♥");
  console.log(dessin);
}


// Calculer une fonction moyenne + for

function calculMoy(arrayNotes) {
  // let cumulNotes = 0;

  for (let i=0 ; i>arrayNotes.length ; i++) {
    cumulNotes = cumulNotes + arrayNotes[i];
  }
   moyNotes = cumulNotes / arrayNotes.length;
   return moyNotes
}
console.log(calculMoy[15,12,18]);
// NON REUSSI

// correction 

function moyenne (tab) {
  let total = 0;
  // on boucle pour tout additionner
  for (let i=0 ; i<tab.length; i++){
    total += tab[i];
  }
  // On fait la division
  return total / tab.length;
}
console.log(moyenne([1,2,3,4,5]));



// BONUS 

let miniTab1 = [1,38,6,8];
let miniTab2 = [8,51,6];
let miniTab3 = [78,0,23];
let bigTab = [miniTab1,miniTab2,miniTab3];


for (let i=0 ; i<bigTab.length ; i++) {
  console.log(bigTab[i]);

  for (let j=0 ; j<miniTab1[j] ; j++) {
    console.log(miniTab1[j])
  }
  for (let k=0 ; k<miniTab2[k] ; k++) {
    console.log(miniTab2[k])
  }
  for (let l=0 ; l<miniTab3[l] ; l++) {
    console.log(miniTab3[l])
  }
}

// CORRECTION 

let minTab1 = [1,38,6,8];
let minTab2 = [8,51,5,78,6];
let minTab3 = [78,0,23];

let tabPrincipal = [minTab1 , minTab2 , miniTab3];

for (let i = 0; i < tabPrincipal.length; i++) {
    for (let j = 0; j < tabPrincipal[i].length; j++) {

        console.log([i], [j], "La valeur est :", tabPrincipal[i][j]);
    }
}
