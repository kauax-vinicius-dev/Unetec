document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const port = 3000;

        const segunda = document.querySelector("#segunda").value.trim();
        const terca = document.querySelector("#terca").value.trim();
        const quarta = document.querySelector("#quarta").value.trim();
        const quinta = document.querySelector("#quinta").value.trim();
        const sexta = document.querySelector("#sexta").value.trim();

        if (segunda.length <= 5 || terca.length <= 5 || quarta.length <= 5 || quinta.length <= 5 || sexta.length <= 5) {
            alert("Os campos de descriçao deve conter ao menos 5 caracteres");
            return;
        };

        const cardapioObjeto = {
            segunda,
            terca,
            quarta,
            quinta,
            sexta,
        };

        try {
            const response = await fetch(`/dashbordCardapioAdmin/Form`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cardapioObjeto)

            });


            if (response.ok) {
                alert("Cardápio criado com sucesso !");
                window.location.href = "/dashbordCardapioAdmin";
            }
            if (!response.ok) {
                alert("Erro ao criar cardápio");
            }


        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            alert("Erro ao tentar cardápio.Tente novamente mais tarde.");
        }

    });
});