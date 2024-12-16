// Script simple pour valider et envoyer le formulaire
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Merci pour votre message ! Je vous répondrai bientôt.");
  // Vous pouvez ajouter ici un traitement de soumission de formulaire, par exemple via AJAX.
});
