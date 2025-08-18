document.addEventListener("DOMContentLoaded", () => {
    const quadro = document.querySelector(".quadro-tarefas");
    const todosAvisos = Array.from(quadro.querySelectorAll(".aviso-item"));

    function getUrgencia(aviso) {
        return aviso.querySelector("p:nth-of-type(2)").textContent
            .split(":")[1]
            .trim()
            .toLowerCase();
    }

    window.filtraGeral = function () {
        quadro.innerHTML = "";
        todosAvisos.slice().reverse().forEach(aviso => quadro.appendChild(aviso));
    }

    window.filtraUrgenciaAlta = function () {
        quadro.innerHTML = "";
        todosAvisos.forEach(aviso => {
            if (getUrgencia(aviso) === "alta") {
                quadro.appendChild(aviso);
            }
        });
    }

    window.filtraUrgenciaMedia = function () {
        quadro.innerHTML = "";
        todosAvisos.forEach(aviso => {
            if (getUrgencia(aviso) === "media") {
                quadro.appendChild(aviso);
            }
        });
    }

    window.filtraUrgenciaBaixa = function () {
        quadro.innerHTML = "";
        todosAvisos.forEach(aviso => {
            if (getUrgencia(aviso) === "baixa") {
                quadro.appendChild(aviso);
            }
        });
    }
});
