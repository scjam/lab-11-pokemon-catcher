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
const pokemon = resultsData.map((item) => {
    return item.name;
});
const captured = resultsData.map((item) => {
    return item.captured;
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemon,
        datasets: [{
            label: '# of Votes',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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