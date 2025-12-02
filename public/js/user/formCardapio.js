document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const port = 3000;

        const opcao = document.querySelector("#Opcao").value.trim();
        const horario = document.querySelector("#horarios").value.trim();

        if (opcao != "Sim" && opcao != "Não") {
            alert("erro ao enviar informações")
            return;
        }

        if (horario != "Manhã" && horario != "Tarde" && horario != "Noite") {
            alert("erro ao enviar informações")
            return;
        }

        const infos = {
            opcao,
            horario,
        }

        try {
            const response = await fetch(`/dashbordCardapioAluno/formAlmoco`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(infos)

            });

            const data = await response.json();

            if (!response.ok) {
                alert("Erro ao enviar informações");
            }

            if (response.ok) {
                alert("Informações enviadas com sucesso!");
                window.location.href = "/dashbordCardapioAluno";
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            alert("Erro ao enviar informações. Tente novamente mais tarde.");
        }
    });
});