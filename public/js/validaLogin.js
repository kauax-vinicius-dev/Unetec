document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha").value.trim();

    // Validação simples de e-mail com expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Verifique seu e-mail");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.msg || "Erro ao fazer login.");
        return;
      }
      localStorage.setItem("email", data.email);

      alert("Login realizado com sucesso!");
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
    } catch (error) {
      alert("Erro ao tentar realizar login.");
      console.error(error);
    }
  });
});
