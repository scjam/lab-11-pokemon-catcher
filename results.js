import { getFromLocalStorage } from './utils.js';

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    window.location = 'index.html';
});

function renderTable() {
    const table = document.querySelector('tbody');
    const pokemonResults = getFromLocalStorage('POKEMON') || [];

    for (let i = 0; i < pokemonResults.length; i++) {
        const result = pokemonResults[i];
        const tr = renderLineItems(result);
        
        table.append(tr);
        
    }
}
renderTable();

function renderLineItems(pokemon) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const captured = document.createElement('td');
    const encountered = document.createElement('td');

    captured.textContent = pokemon.captured;
    encountered.textContent = pokemon.encountered;

    tdName.textContent = pokemon.name;

    tr.append(tdName, captured, encountered);

    return tr;
}