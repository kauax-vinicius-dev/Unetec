const form = document.querySelector("#form-chat");
const socket = io();
const nomeRemetente = localStorage.getItem("nome")?.trim() || "";
const idRemetente = localStorage.getItem("userId")?.trim() || "";


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".mensagem-item").forEach((msg) => {
        let emailMensagem = msg.getAttribute("data-email");
        if (!emailMensagem) return;
        emailMensagem = emailMensagem.trim().toLowerCase();
        if (emailMensagem === idRemetente) {
            msg.classList.add("mensagem-minha");
        }
    });
    scrollToBottom();
});

function scrollToBottom() {
    const divMensagens = document.querySelector(".mensagens-chat");
    divMensagens.scrollTop = divMensagens.scrollHeight;
}

function renderMensagens(mensagem, enviadaPorMim = false, senderId = "", nome = "") {
    const divMensagens = document.querySelector(".mensagens-chat");
    const elementoMensagem = document.createElement("div");
    elementoMensagem.classList.add("mensagem-item");
    if (senderId) elementoMensagem.setAttribute("data-email", senderId);
    if (enviadaPorMim) elementoMensagem.classList.add("mensagem-minha");
    elementoMensagem.innerHTML = `
        <div class="mensagem-nome">${nome}</div>
        <div class="mensagem-texto">${mensagem}</div>
    `;
    divMensagens.appendChild(elementoMensagem);
    scrollToBottom();
}

socket.on("receivedMessage", (mensagemObjeto) => {
    const senderNormalized = mensagemObjeto.idRemetente?.trim().toLowerCase() || "";
    if (senderNormalized === idRemetente) return;
    renderMensagens(mensagemObjeto.text, false, senderNormalized, mensagemObjeto.nomeRemetente);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const mensagemText = document.querySelector("#mensagem").value;
    if (!mensagemText.length) return;
    const mensagemObjeto = {
        idRemetente: idRemetente,
        nomeRemetente: nomeRemetente,
        text: mensagemText
    };
    renderMensagens(mensagemText, true, idRemetente, nomeRemetente);
    socket.emit("sendMessage", mensagemObjeto);
    document.querySelector("#mensagem").value = "";
});
