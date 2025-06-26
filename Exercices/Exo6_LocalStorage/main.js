// Exercice Local Storage :*

// Côté HTML

// 1) Créer un formulaire de connexion :
    
// input login
// input mot de passe
// submit (se connecter)

// 2) Créer un formulaire d'inscription
    
// input login
// input mot de passe
// submit (s'inscrire)

// 3) Une balise h2 "CONNECTE !!!" qui sera en display none


// Côté JS

// 1) Faire en sorte que lorsque l'on s'inscrit avec le formulaire d'inscription (event "submit" sur le formulaire, ou "click" sur le bouton du formulaire) :
    
// Ca fait un preventDefault sur l'event
// on récupère le login et le mot de passe
// on les enregistre dans le local storage

// 2) Faire en sorte que lorsque l'on se connecte :
    
// ça fait un preventDefault sur l'event
// on récupère le login et le mot de passe du formulaire
// on récupère le login et le mot de passe du local storage
// on compare les logins, s'ils ne corresponde pas, on envoie une alert : "Mauvais Login"
// on compare les mots de passe, s'ils ne corresponde pas, on envoie une alert "Mauvais Mot de Passe"
// Si tout correspond, on affiche le titre h2



//  PART 1
const signUp = document.getElementById("formulaire1");

signUp.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log(event);
    const login = document.getElementById("login1").value;
    const mdp = document.getElementById("mdp1").value;

    localStorage.setItem("login", login);
    localStorage.setItem("mdp", mdp);

});


//  PART 2

const signIn = document.getElementById("formulaire2");

signIn.addEventListener("submit" , function(event) {
    event.preventDefault();
    // console.log(event);

    const login = document.getElementById("login2").value;
    const localLog = localStorage.getItem("login");

    if (login != localLog) {
        alert("erreur login");
    }

    const mdp = document.getElementById("mdp2").value;
    const mdpass = localStorage.getItem("mdp");

    if (mdp != mdpass)
        alert("erreur mdp");
})













































