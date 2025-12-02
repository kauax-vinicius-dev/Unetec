// Código que roda em TODAS as páginas - IMEDIATAMENTE
(function () {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
    }

    // Só tenta mexer no checkbox caso ele exista (apenas na página de config)
    const checkbox = document.getElementById("config-1");
    if (checkbox) {
        checkbox.checked = temaSalvo === "escuro";
        checkbox.addEventListener("change", function () {
            const isDark = document.body.classList.toggle("dark-mode");
            localStorage.setItem("tema", isDark ? "escuro" : "claro");
        });
    }
})();