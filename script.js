window.addEventListener("scroll", function(){
    const btn= document.getElementById("btnTop");
    btn.style.display = window.scrollY > 200 ? "block" : "none";
    
});
document.getElementById("btnTop").addEventListener("click", function(){
    window.scrollTo  ({
        top: 0,
        behavior: "smooth"
    });
}); 

 function validateForm(){
     let nom = document.getElementById("nom").value.trim();
     let email = document.getElementById("mail").value.trim();
     let password = document.getElementById("password").value;
     let password2 = document.getElementById("password2").value;
     let age = document.getElementById("age").value;
     
     let errors = [];
     if (nom === ""){
         errors.push("Le nom est obligatoire.");
     }
     
     if (email === ""){
         errors.push("L'email est obligatoire.");
     }
     
     if (password === ""){
         errors.push("Le mot de passe est obligatoire.");
     }
     
     if (password2 === ""){
         errors.push("La confirmation du mot de passe est obligatoire.");
     }
     
     if (password !== password2) {
         errors.push("Les mots de passe ne correspondent pas.");
     }
     
     if (age === "" || age <= 0) {
         errors.push ("L'âge doit être un nombre positif.");
     }
     
     if (errors.length > 0) {
         alert("Erreurs:\n\n" + errors.join("\n"));
     } else {
         alert ("Validé avec succès !");
     }
 }
document.addEventListener("DOMContentLoaded", () => {
    const btnInscription = document.getElementById("btnInscription");
    const form = document.getElementById("formConnexion");
    
    btnInscription.addEventListener("click", () => {
        //toggle : si visible -> cacher/si caché -> montrer
        if (form.style.display === "none" || form.style.display === ""){
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    });
    
});

const menuItems = document.querySelectorAll("nav a");
menuItems.forEach(item => {
if(item.href === window.location.href){
item.classList.add("active");
}

});

if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
const userName = prompt("Bonjour ! Quel est votre nom ?");
if(userName && userName.trim() !== "") {
document.getElementById("welcomeUser").textContent = "Bienvenue, " + userName + " !";
} else {
document.getElementById("welcomeUser").textContent = "Bienvenue sur notre site !";
}
}
document.addEventListener("DOMContentLoaded", function () {

    function updateClock() {
        const clockElement = document.getElementById("clock");
        if (!clockElement) return;

        const now = new Date();

        const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];

        const dayName = days[now.getDay()];
        const day = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clockElement.innerHTML =
            `<b>${dayName} ${day} ${month} ${year} - ${hours}:${minutes}:${seconds}</b>`;
    }

    updateClock();
    setInterval(updateClock, 1000);
});


const items = [
    "Riz au coco",
    "Gaou-Beignets de Cornilles",
    "Poulpe en sauce",
    
];


const button = document.getElementById("generateBtn");
const list = document.getElementById("itemList");

button.addEventListener("click", () => {
    list.innerHTML = ""; 

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
});