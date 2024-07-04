document.addEventListener("DOMContentLoaded", function() {
  var inscriptionForm = document.querySelector("form");
  inscriptionForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var nom = document.querySelector("input[name='nom']").value.trim();
      var prenom = document.querySelector("input[name='prenom']").value.trim();
      var numero = document.querySelector("input[name='numero']").value.trim();
      var email = document.querySelector("input[name='email']").value.trim();
      var motDePasse = document.querySelector("input[type='password']").value.trim();
      var motDePasse1 = document.querySelector("input[name='password']").value.trim();
      var motDePasse2 = document.querySelector("input[name='password-confirmation']").value.trim();
      
      if (nom === "" || prenom === "" || numero === "" || email === "" || motDePasse === "" || motDePasse1 === "" || motDePasse2 === "") {
          alert("Veuillez remplir tous les champs.");
          return;
      }

      if (!isValidEmail(email)) {
          alert("Veuillez entrer une adresse email valide.");
          return;
      }

      if (!isValidPhoneNumber(numero)) {
          alert("Veuillez entrer un numéro de téléphone valide.");
          return;
      }

      if (motDePasse1 !== motDePasse2) {
        alert("Les deux mots de passe ne correspondent pas.");
        return;
      }
      
      alert("Bienvenue, " + prenom + " " + nom + "!");
      // Redirection vers index.html après que l'utilisateur ait cliqué sur "OK" dans l'alerte de bienvenue
      setTimeout(function() {
          window.location.href = "index.html";
      }, 10); // Redirection après 10 millisecondes
  });

  function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(numero) {
    var phoneRegex = /^(0|\+33|0033)[1-9]\d{8}$/;
    return phoneRegex.test(numero);
  }
});
