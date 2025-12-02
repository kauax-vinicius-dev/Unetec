document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const diaEscolhido = document.querySelector("#camposDias").value;
        let estado = false;

        if (!diaEscolhido) {
            alert("erro")
            return;
        }

        if (estado === false) {
            estado = true;
        }

        if (estado === true) {
            estado = false;
        }




        try {
            const response = await fetch(`/dashbordCardapioAluno`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ diaEscolhido, estado }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert("erro");
                return;
            }

            if (response.ok) {
                alert("Obrigado!");
                window.location.href = '/dashbordCardapioAluno';
            }

        } catch (error) {
            alert("Erro ao tentar realizar login.");
            console.error(error);
        }

    });
});
