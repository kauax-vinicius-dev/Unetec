
async function excluirAviso(id) {
    try {
        const response = await fetch(`/dashbordEtecAvisosAdmin/Delete/${id}`, {
            method: "Delete",
            headers: {
                "Content-Type": "application/json"
            }
        });


        if (!response.ok) {
            alert("Erro ao excluir aviso");
        }

        if (response.ok) {
            window.location.href = "/dashbordEtecAvisosAdmin";
        }

    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        alert("Erro ao tentar excluir aviso. Tente novamente mais tarde.");

    }

}