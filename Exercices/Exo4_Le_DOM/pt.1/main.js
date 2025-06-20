const paragraphe = document.body.getElementsByTagName("p");
console.log(paragraphe);

const titre = document.body.getElementsByTagName("h1");
console.log(titre);

const liste = document.body.getElementsByTagName("ul");
console.log(liste);

// Pour l'id : getElementById ()
const p1 = document.getElementById("p1");
console.log(p1);

// Pour tous les elements : QuerySelector() et QuerySelectorAll()
const doublePara = document.querySelector("p");
console.log(doublePara);

const doqsdfhngfublePara = document.querySelectorAll("p");
console.log(doqsdfhngfublePara);

const vaChercher = document.querySelector("h3");
console.log(vaChercher);

// avec une classe
const encorePara = document.querySelectorAll(".mesParas");
console.log(encorePara);
const titreH3 = document.querySelector("#titre3")


// insertBefore() et appendChild()
document.body.appendChild(titreH3);
console.log(titreH3);

const titreH1 = document.querySelector("h1");
document.body.insertBefore(liste[1],titreH1);


// removeChild(), createTextNode() et replaceChild()

document.body.removeChild(liste[2]);

document.body.replaceChild(liste[0],liste[1]);

// document.body.replaceChild(paragraphe[1],paragraphe[0]);

const ajoutTxt = document.createTextNode("OHOHOHOHOH");
document.body.appendChild(ajoutTxt);
// document.body.insertBefore(liste[1],titreH1);


// createElement + innerHTML

function ajoutTexte(pseudo, duTexte, encoreDuTexte) {
    const newTxt = document.createElement("p");

    newTxt.innerText = `<strong>${pseudo} ... ${duTexte}</strong> : ${encoreDuTexte}`;
    document.body.appendChild(newTxt);
}

ajoutTexte("Will","SMIC","t'as capté?");
ajoutTexte("Henry","Kabile", "drole non ?")


// 

const texteTab = Array.from(paragraphe);
texteTab.map(paragraphe => paragraphe.innerHTML = "LOL HACKED");

console.log(texteTab);


//

console.log(paragraphe[0].offsetHeight);
console.log(p1.offsetWidth);
console.log(paragraphe[2].clientWidth);


// 


titreH1[0].addEventListener("click", function() {
titreH1.classList.add("maCouleur")
});

titreH1[1].addEventListener("click", function() {
titreH1.classList.add("maCouleur")
});

titreH1[2].addEventListener("click", function() {
titreH1.classList.add("maCouleur")
});


