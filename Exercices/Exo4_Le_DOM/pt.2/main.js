// Code JavaScript ici

// const titre = document.querySelector("h1");
// const liens = document.querySelectorAll("a");

// liens[0].addEventListener("click", function() {
//     titre.classList.add("maCouleur");
// });

// liens[1].addEventListener("click", function() {
//     titre.classList.remove("maCouleur");
// });

// liens[2].addEventListener("click", function() {
//     titre.classList.toggle("maCouleur");
// });


// //


// const link = document.querySelector("a");

// function monClic() {
//     console.log("Bonjour");
//     link.removeEventListener("click", monClic);
// }

// link.addEventListener("click", monClic);

// addEventListener("keydown", function(event) {
//     console.log(event);
// })


// 



// addEventListener("click", function() {
//     console.log("1 Clic");
// });


// addEventListener("click", function(unEvent) {
//     console.log(unEvent);
// });


// addEventListener("click", function(unEvent) {
//     console.log(unEvent.x , unEvent.y);
// });


addEventListener("click", function(e) {
    const monImg = this.document.createElement("img");
    let taille = 200;
    monImg.setAttribute("src","https://loremflickr.com/200/200")
    // console.log(unEvent.x , unEvent.y);

    monImg.style.position = "absolute";
    monImg.style.left = e.x - taille /2 + "px";
    monImg.style.top = e.y - taille /2  + "px";

    document.body.appendChild(monImg);
});


