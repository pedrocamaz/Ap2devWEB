document.addEventListener("DOMContentLoaded", () => {
    const apiBase = "https://botafogo-atletas.mange.li/2024-1";
    const container = document.getElementById("player-container");
    const btnMasculino = document.getElementById("btn-masculino");
    const btnFeminino = document.getElementById("btn-feminino");
    const btnCompleto = document.getElementById("btn-completo");

    const fetchElenco = async (categoria) => {
        try {
            const response = await fetch(`${apiBase}/${categoria}`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar ${categoria}: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            alert(`Erro ao carregar dados de ${categoria}. Verifique a API.`);
            return [];
        }
    };

    const renderPlayers = (players) => {
        container.innerHTML = "";
        if (players.length === 0) {
            container.innerHTML = "<p>Nenhum jogador encontrado.</p>";
            return;
        }

        players.forEach((player) => {
            const card = document.createElement("div");
            card.className = "player-card";

            const img = document.createElement("img");
            img.src = player.imagem || "placeholder.jpg";
            img.alt = `Foto de ${player.nome}`;
            img.className = "player-img";

            const name = document.createElement("h3");
            name.innerText = player.nome;

            const button = document.createElement("button");
            button.innerText = "Saiba mais";
            button.onclick = () => {
                window.location.href = `details.html?id=${player.id}`;
            };

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(button);
            container.appendChild(card);
        });
    };

    btnMasculino.addEventListener("click", async () => {
        const players = await fetchElenco("masculino");
        renderPlayers(players);
    });

    btnFeminino.addEventListener("click", async () => {
        const players = await fetchElenco("feminino");
        renderPlayers(players);
    });

    btnCompleto.addEventListener("click", async () => {
        const masculino = await fetchElenco("masculino");
        const feminino = await fetchElenco("feminino");
        const completo = [...masculino, ...feminino];
        renderPlayers(completo);
    });

    btnCompleto.click();
});
