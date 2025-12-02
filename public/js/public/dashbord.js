document.addEventListener("DOMContentLoaded", () => {
    const nomeUser = localStorage.getItem("nome");
    const navDiv = document.querySelector(".nav-nome");

    if (navDiv && nomeUser) {
        const textPersonalizado = document.createElement("h1");
        textPersonalizado.textContent = 'Olá ' + nomeUser + '! Que bom te ver por aqui!';
        navDiv.appendChild(textPersonalizado);
    }
});
