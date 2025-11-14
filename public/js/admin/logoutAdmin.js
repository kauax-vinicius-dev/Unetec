
async function logout() {
    try {
        const response = await fetch(`/dashbordContaAdmin`, {
            method: "POST"
        })

        if (!response.ok) {
            alert("Erro ao realizar logout")
        }

        if (response.ok) {
            alert("Logout realizado com sucesso")
            window.location.href = "/home";
        }
    } catch (error) {
        console.error("Erro ao conectar:", error);
        alert("Erro ao realizar logout. Tente novamente");
    }
}

async function outraConta(event) {
    event.preventDefault();
    await logout();
    window.location.href = "/login";

}

