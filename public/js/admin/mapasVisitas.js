document.addEventListener("DOMContentLoaded", function () {
  const mapas = document.querySelectorAll('.mapa-container');

  // Para cada mapa, inicializa
  mapas.forEach(async (container) => {
    const endereco = container.getAttribute('data-endereco');
    const idDoMapa = container.getAttribute('data-id');

    await mostrarMapa(endereco, `mapa-${idDoMapa}`);
  });
});

async function mostrarMapa(endereco, idDoMapa) {
  try {
    // Verifica se já existe um mapa neste container
    const container = document.getElementById(idDoMapa);
    if (!container) return;

    // Limpa o container (importante se houver re-renderização)
    container.innerHTML = '';

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (!dados.length) {
      container.innerHTML = '<p style="color: #666; text-align: center;">Endereço não encontrado</p>';
      return;
    }

    const lat = dados[0].lat;
    const lon = dados[0].lon;

    const mapa = L.map(idDoMapa).setView([lat, lon], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(mapa);

    L.marker([lat, lon]).addTo(mapa)
      .bindPopup(`<strong>${endereco}</strong>`)
      .openPopup();

    // Ajusta o tamanho do mapa
    setTimeout(() => {
      mapa.invalidateSize();
    }, 100);

  } catch (erro) {
    console.error("Erro ao carregar mapa:", erro);
    const container = document.getElementById(idDoMapa);
    if (container) {
      container.innerHTML = '<p style="color: red; text-align: center;">Erro ao carregar mapa</p>';
    }
  }
}

