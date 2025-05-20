let savedWebhook = "";
let savedSite = "";

function salvarWebhook() {
  savedWebhook = document.getElementById("webhook").value;
  alert("Webhook salvo!");
}

function salvarSite() {
  savedSite = document.getElementById("site").value;
  alert("Site salvo!");
}

function executarXSS() {
  alert("XSS executado (fictício)\nWebhook: " + savedWebhook + "\nSite: " + savedSite);
}
