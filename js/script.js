// Función para ocultar el banner de cookies
function hideCookieBanner() {
    document.getElementById("cookie-banner").style.display = "none";
}

document.getElementById("accept-cookies").addEventListener("click", function () {
    // Al hacer clic en "Aceptar", oculta el banner de cookies y establece una cookie de consentimiento (puedes personalizar esta parte)
    hideCookieBanner();
    document.cookie = "cookies_accepted=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
});

document.getElementById("reject-cookies").addEventListener("click", function () {
    // Al hacer clic en "Rechazar", oculta el banner de cookies y establece una cookie de rechazo (puedes personalizar esta parte)
    hideCookieBanner();
    document.cookie = "cookies_rejected=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
});

// Verificar si el usuario ya ha aceptado o rechazado las cookies (puedes personalizar esta parte)
if (document.cookie.indexOf("cookies_accepted=true") !== -1 || document.cookie.indexOf("cookies_rejected=true") !== -1) {
    hideCookieBanner();
}


// boton flotante con agente

