// import functions and grab DOM elements
import { pokemonData } from './pokemon.js';
import { findById, setInLocalStorage } from './utils.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');

// initialize state
let totalRounds = 0;
const resultsArray = [];
const POKEMON = 'POKEMON';

function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];

}

let pokemonOne, pokemonTwo, pokemonThree = 0; 

function randomizePokemon() {
    
    pokemonOne = getRandomPokemon(pokemonData);
    pokemonTwo = getRandomPokemon(pokemonData);
    pokemonThree = getRandomPokemon(pokemonData);

    while (pokemonOne.id === pokemonTwo.id) {
        pokemonOne = getRandomPokemon(pokemonData);
    }
    while (pokemonTwo.id === pokemonThree.id) {
        pokemonTwo = getRandomPokemon(pokemonData);
    }
    while (pokemonThree.id === pokemonOne.id) {
        pokemonThree = getRandomPokemon(pokemonData);
    }

    radios[0].value = pokemonOne.id;
    images[0].src = pokemonOne.url_image;

    radios[1].value = pokemonTwo.id;
    images[1].src = pokemonTwo.url_image;

    radios[2].value = pokemonThree.id;
    images[2].src = pokemonThree.url_image;

    let pokemon = findById(resultsArray, Number(pokemonOne.id));

    if (!pokemon) {
        const newPokemon = findById(pokemonData, Number(pokemonOne.id));
        pokemon = {
            id: Number(pokemonOne.id),
            name: newPokemon.pokemon,
            encountered: 1,
            captured: 0,
        };
        resultsArray.push(pokemon);
    } else {
        pokemon.encountered++;
    }

    let pokemon2 = findById(resultsArray, Number(pokemonTwo.id));

    if (!pokemon2) {
        const newPokemon = findById(pokemonData, Number(pokemonTwo.id));
        pokemon2 = {
            id: Number(pokemonTwo.id),
            name: newPokemon.pokemon,
            encountered: 1,
            captured: 0,
        };
        resultsArray.push(pokemon2);
    } else {
        pokemon2.encountered++;
    }

    let pokemon3 = findById(resultsArray, Number(pokemonThree.id));

    if (!pokemon3) {
        const newPokemon = findById(pokemonData, Number(pokemonThree.id));
        pokemon3 = {
            id: Number(pokemonThree.id),
            name: newPokemon.pokemon,
            encountered: 1,
            captured: 0,
        };
        resultsArray.push(pokemon3);
    } else {
        pokemon3.encountered++;
    }

}

randomizePokemon();

//addEventListener(randomizePokemon);
// set event listeners to update state and DOM


for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {

        const pokemon = findById(resultsArray, Number(e.target.value));
        pokemon.captured++;
        totalRounds++;
        

        for (let i = 0; i < radios.length; i++) {
            images[i].style.opacity = .5;
        }

        randomizePokemon();
        if (totalRounds === 10) {
            setInLocalStorage(POKEMON, resultsArray);
            window.location = 'results.html';
        }
        
        console.log(resultsArray);


    });
}
