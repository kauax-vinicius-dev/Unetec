document.addEventListener("DOMContentLoaded", () => {
    const quadro = document.querySelector(".quadro-tarefas");
    const todosAvisos = Array.from(quadro.querySelectorAll(".aviso-item"));
    window.filtraAvisos = function (urgencia) {
        quadro.innerHTML = "";
        if (urgencia === "geral") {
            if (!todosAvisos.length) {
                quadro.innerHTML = "<h1>Não há nenhum aviso no momento.</h1>"
            }
            todosAvisos.slice().reverse().forEach(aviso => quadro.appendChild(aviso));
            return;
        }
        const avisosFiltrados = todosAvisos.filter(aviso => getUrgencia(aviso) === urgencia);
        if (avisosFiltrados.length === 0) {
            quadro.innerHTML = `<h1>Não há nenhum aviso de ${urgencia} urgência no momento.</h1>`;
            return;
        }
        avisosFiltrados.forEach(aviso => {
            quadro.appendChild(aviso);
        });
    }
    window.onload = function verificaExistenciaAvisos() {
        if (!todosAvisos.length) {
            quadro.innerHTML = "<h1>Não há nenhum aviso no momento.</h1>"
        }
    }
    function getUrgencia(aviso) {
        return aviso.querySelector("p:nth-of-type(2)").textContent.split(":")[1].trim().toLowerCase();
    }
});

