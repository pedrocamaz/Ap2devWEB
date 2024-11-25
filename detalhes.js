document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const atletaId = params.get("id");

  fetch(`https://botafogo-atletas.mange.li/2024-1/detalhes/${atletaId}`)
      .then((response) => response.json())
      .then((atleta) => {
          displayDetails(atleta);
      })
      .catch((error) => console.error("Erro ao carregar detalhes do atleta:", error));
});

function displayDetails(atleta) {
  const container = document.getElementById("details-container");
  container.innerHTML = `
      <h1>${atleta.nome}</h1>
      <img src="${atleta.imagem}" alt="Imagem do atleta ${atleta.nome}">
      <p><strong>Posição:</strong> ${atleta.posicao}</p>
      <p><strong>Idade:</strong> ${atleta.idade} anos</p>
      <p><strong>Descrição:</strong> ${atleta.descricao}</p>
  `;
}

  