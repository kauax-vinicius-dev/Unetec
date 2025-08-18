document.addEventListener("DOMContentLoaded", () => {
    const quadro = document.querySelector(".quadro-tarefas");
    const todosAvisos = Array.from(quadro.querySelectorAll(".aviso-item"));




    window.onload = function verificaExistenciaAvisos() {
        if (!todosAvisos.length) {
            quadro.innerHTML = "<h1>Nenhum aviso disponivel.</h1>"
        }
    }

    function getUrgencia(aviso) {
        return aviso.querySelector("p:nth-of-type(2)").textContent
            .split(":")[1]
            .trim()
            .toLowerCase();
    }

    window.filtraGeral = function () {
        todosAvisos.slice().reverse().forEach(aviso => quadro.appendChild(aviso));
    }

    window.filtraUrgenciaAlta = function () {
        todosAvisos.forEach(aviso => {
            if (getUrgencia(aviso) === "alta") {
                quadro.appendChild(aviso);
            }
        });

    }

    window.filtraUrgenciaMedia = function () {
        todosAvisos.forEach(aviso => {
            if (getUrgencia(aviso) === "media") {
                quadro.appendChild(aviso);
            }
        });
    }

    window.filtraUrgenciaBaixa = function () {
        todosAvisos.forEach(aviso => {
            if (getUrgencia(aviso) === "baixa") {
                quadro.appendChild(aviso);
            }
        });

    }
});
