document.addEventListener("DOMContentLoaded", function() {
    const characterListContainer = document.getElementById('character-list');
    const characterDetailContainer = document.getElementById('character-detail');

/* DOMContentLoaded: Asegura que el código se ejecute solo después de que todo el contenido de la página se haya cargado.
fetchCharacters: Obtiene la lista de personajes desde la API.
fetchCharacterDetail: Obtiene los detalles de un personaje específico desde la API.
displayCharacterList: Muestra la lista de personajes en tarjetas.
displayCharacterDetail: Muestra los detalles de un personaje seleccionado.
showCharacterDetail: Función global que se llama al hacer clic en "View Details" para mostrar los detalles del personaje.
goBack: Función global para volver a la lista de personajes desde la vista de detalles. */

    function fetchCharacters() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => displayCharacterList(data.results));
    }

    function fetchCharacterDetail(id) {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => displayCharacterDetail(data));
    }

    function displayCharacterList(characters) {
        characterListContainer.innerHTML = '';

        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.className = 'card col-md-4 mb-4';
            characterCard.innerHTML = `
                <img src="${character.image}" class="card-img-top" alt="${character.name}" />
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <button class="btn btn-primary" onclick="showCharacterDetail(${character.id})">View Details</button>
                </div>
            `;
            characterListContainer.appendChild(characterCard);
        });
    }

    function displayCharacterDetail(character) {
        characterDetailContainer.innerHTML = `
        <div class="container my-5 mt-5">
            <h1>${character.name}</h1>
            <img src="${character.image}" alt="${character.name}" className="img-fluid" />
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
            <p>Origin: ${character.origin.name}</p>
            <button class="btn btn-primary mb-5" onclick="goBack()">Go Back</button>
        </div>
        `;
        characterDetailContainer.style.display = 'block';
        characterListContainer.style.display = 'none';
    }

    window.showCharacterDetail = function(id) {
        fetchCharacterDetail(id);
    }

    window.goBack = function() {
        characterDetailContainer.style.display = 'none';
        characterListContainer.style.display = 'flex';
    }

    fetchCharacters();
});


