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

const resultsData = getFromLocalStorage('POKEMON');
const onlyCaptures = resultsData.filter((item) => item.captured);
console.log(onlyCaptures);

const pokemon = onlyCaptures.map((item) => {
    return item.name;
});

const captured = onlyCaptures.map((item) => {
    return item.captured;

});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemon,
        datasets: [{
            label: 'Pokemon Game',
            data: captured,
            backgroundColor: [
                'rgba(3, 7, 30, 0.2)',
                'rgba(55, 6, 23, 0.2)',
                'rgba(106, 4, 15, 0.2)',
                'rgba(157, 2, 8, 0.2)',
                'rgba(208, 0, 0, 0.2)',
                'rgba(220, 47, 2, 0.2)',
                'rgba(232, 93, 4, 0.2)',
                'rgba(244, 140, 6, 0.2)',
                'rgba(250, 163, 7, 0.2)',
                'rgba(255, 186, 8, 0.2)'
            ],
            borderColor: [
                'rgba(3, 7, 30, 1)',
                'rgba(55, 6, 23, 1)',
                'rgba(106, 4, 15, 1)',
                'rgba(157, 2, 8, 1)',
                'rgba(208, 0, 0, 1)',
                'rgba(220, 47, 2, 1)',
                'rgba(232, 93, 4, 1)',
                'rgba(244, 140, 6, 1)',
                'rgba(250, 163, 7, 1)',
                'rgba(255, 186, 8, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});