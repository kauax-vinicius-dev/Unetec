
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");


    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        let formValido = true;
        const port = 3000

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        const senha = document.querySelector("#senha").value.trim();
        const senhaCopy = document.querySelector("#senhaCopy").value.trim();
        const escolaridade = document.querySelector("#escolaridade").value.trim();

        let labelCor = document.querySelector(".label-text")
        let labelNome = document.querySelector("#label-nome");
        let labelEmail = document.querySelector("#label-email");
        let labelEscolaridade = document.querySelector("#label-escolaridade");
        let labelSenha = document.querySelector("#label-senha");
        let labelSenhaCopy = document.querySelector("#label-senhaCopy");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação dos campos
        if (nome === "") {
            labelNome.innerHTML = "Campo vazio";
            formValido = false;
        }

        if (/\d/.test(nome)) {
            labelNome.innerHTML = "O nome não pode conter números";
            formValido = false;
        }

        if (!emailRegex.test(email)) {
            alert("Verifique seu e-mail");
            formValido = false;
        }

        if (/\d/.test(escolaridade)) {
            labelEscolaridade.innerHTML = "Escolha uma opção";
            formValido = false;
        }

        if (senha.length < 6) {
            labelSenha.innerHTML = "A senha deve ter pelo menos 6 caracteres";
            formValido = false;
        }

        if (senha !== senhaCopy) {
            labelSenhaCopy.innerHTML = "As senhas não coincidem";
            formValido = false;
        }

        // Se o formulário for válido, faz a requisição para a API
        if (formValido) {
            const userData = {
                nome,
                email,
                escolaridade,
                senha,
                senhaCopy,
            };

            try {
                const response = await fetch(`/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();

                if (!response.ok) {
                    alert(data.msg);
                }

                if (response.ok) {
                    alert("Cadastro realizado com sucesso!");
                    window.location.href = "/login";
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
                alert("Erro ao tentar cadastrar. Tente novamente mais tarde.");
            }
        }
    });
});
