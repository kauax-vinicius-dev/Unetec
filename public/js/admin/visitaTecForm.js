document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const titulo = document.querySelector("#titulo").value.trim();
        const descricao = document.querySelector("#descricao").value.trim();
        const localizacao = document.querySelector("#localizacao").value.trim();
        const pdfLink = document.querySelector("#dockerLink").value.trim();
        const dataDaVisita = document.querySelector("#data").value.trim();
        const SalasVisita = document.querySelector("#salas").value.trim();

        if (!titulo || titulo.length < 5) {
            alert("O título deve ter pelo menos 5 caracteres.");
            event.preventDefault();
            return;
        }
        if (titulo.length > 30) {
            alert("O título deve ter no máximo 30 caracteres.");
            event.preventDefault();
            return;
        }
        if (!descricao || descricao.length < 10) {
            alert("A descrição deve ter pelo menos 10 caracteres.");
            event.preventDefault();
            return;
        }
        if (!localizacao || localizacao.length < 5) {
            alert("A localização está muito curta.");
            event.preventDefault();
            return;
        }
        if (!pdfLink || !pdfLink.startsWith("http")) {
            alert("O link do arquivo deve ser uma URL válida.");
            event.preventDefault();
            return;
        }
        if (!dataDaVisita) {
            alert("A data da visita é obrigatória.");
            event.preventDefault();
            return;
        }
        if (!SalasVisita || SalasVisita.length < 1) {
            alert("Informe ao menos uma turma.");
            event.preventDefault();
            return;
        }
        const visitaData = {
            titulo,
            descricao,
            localizacao,
            pdfLink,
            dataDaVisita,
            SalasVisita
        };
        try {
            const response = await fetch(`/dashbordVisitaTecnicaAdmin/Form`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(visitaData)
            });
            const res = await response.json();
            if (!response.ok) {
                alert("Erro ao criar visita");
            }
            if (response.ok) {
                alert("Visita Técnica criado com sucesso");
                window.location.href = "/dashbordVisitaTecnicaAdmin";
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            alert("Erro ao tentar criar visita técnica. Tente novamente mais tarde.");
        }
    });
});

