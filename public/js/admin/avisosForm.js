document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const port = 3000

        const titulo = document.querySelector("#titulo").value.trim();
        const descricao = document.querySelector("#descricao").value.trim();
        const urgencia = document.querySelector("#urgencia").value.trim();

        if (titulo.length < 5) {
            alert("O titulo deve ter pelo menos 5 caracteres.");
            event.preventDefault();
            return;
        }

        if (titulo.length > 30) {
            alert("O titulo deve ter no máximo 20 caracters.");
            event.preventDefault();
            return;
        }

        if (descricao.length < 10) {
            alert("A descrição deve ter pelo menos 5 caracteres.");
            event.preventDefault();
            return;
        }

        const urgenciasValidas = ["Alta", "Media", "Baixa"];
        if (!urgenciasValidas.includes(urgencia)) {
            alert("Selecione uma urgência válida.");
            event.preventDefault();
            return;
        }

        const avisoData = {
            titulo,
            descricao,
            urgencia,
        };

        try {
            const response = await fetch(`http://localhost:${port}/dashbordAvisosAdmin/Form`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(avisoData)

            });

            const res = await response.json();

            if (!response.ok) {
                alert("Erro ao criar aviso");
            }

            if (response.ok) {
                alert("Aviso criado com sucesso");
                window.location.href = "/dashbordAvisosAdmin";
            }

        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            alert("Erro ao tentar criar aviso. Tente novamente mais tarde.");
        }
    });
});