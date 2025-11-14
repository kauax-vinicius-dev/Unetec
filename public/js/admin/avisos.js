
async function excluirAviso(id) {
    try {
        const response = await fetch(`/dashbordAvisosAdmin/Delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
 

        if (!response.ok) {
            alert("Erro ao excluir aviso");
        }

        if (response.ok) {
            window.location.href = "/dashbordAvisosAdmin";
        }

    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        alert("Erro ao tentar excluir aviso. Tente novamente mais tarde.");

    }

}