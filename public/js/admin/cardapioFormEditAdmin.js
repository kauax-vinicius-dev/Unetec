document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const campoEscolhido = document.querySelector("#camposDias").value.trim();
        const alteracaoCampoEscolhido = document.querySelector("#Campos").value.trim();
        const port = 3000;
        const testaString = /\d/;

        if (
            campoEscolhido !== "segunda" &&
            campoEscolhido !== "terca" &&
            campoEscolhido !== "quarta" &&
            campoEscolhido !== "quinta" &&
            campoEscolhido !== "sexta"
        ) {
            alert("Erro ao fazer a alteração: dia inválido.");
            return;
        }


        if (testaString.test(alteracaoCampoEscolhido)) {
            alert("Erro ao fazer a alteração: o campo não pode conter números.");
            return;
        }

        const infos = {
            campoEscolhido,
            alteracaoCampoEscolhido,
        };

        try {
            const response = await fetch(`http://localhost:${port}/dashbordCardapio/Form/Edit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(infos)
            });

            if (!response.ok) {
                alert("Erro ao editar cardápio.");
                return;
            }

            alert("Cardápio editado com sucesso!");
            window.location.href = "/dashbordCardapioAdmin";

        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            alert("Erro ao editar cardápio. Tente novamente mais tarde.");
        }
    });
});
