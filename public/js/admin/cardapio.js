document.addEventListener("DOMContentLoaded", () => {
    const buttonExcluir = document.querySelector("#button-excluir");
    const id = buttonExcluir.dataset.id;

    buttonExcluir.addEventListener("click", async () => {
        try {
            const response = await fetch(`/dashbordCardapioAdmin/Delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                alert("Erro ao excluir cardápio");
            }

            if (response.ok) {
                window.location.href = "/dashbordCardapioAdmin";
                alert("Cardápio excluido")
                
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            alert("Erro ao tentar excluir cardapio. Tente novamente mais tarde.");
        }
    });

});