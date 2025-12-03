async function excluirVisita(id) {
  try {
    const response = await fetch(`/dashbordVisitaTecnicaAdmin/Delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });


    if (!response.ok) {
      alert("Erro ao excluir visita");
    }

    if (response.ok) {
      window.location.href = "/dashbordVisitaTecnicaAdmin";
    }

  } catch (error) {
    console.error("Erro ao conectar com a API:", error);
    alert("Erro ao tentar excluir aviso. Tente novamente mais tarde.");

  }
}