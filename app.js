// import functions and grab DOM elements
import { rawPokemonData } from './pokemon.js';

const radios = document.querySelectorAll('input');
const next = document.querySelector('button');
const capture = document.querySelector('#capture');
const images = document.querySelectorAll('label > img');

// initialize state
let pokemonCaptured = 0;
let pokemonEncountered = 0;

function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];

}

let pokemonOne = getRandomPokemon(rawPokemonData); 
let pokemonTwo = getRandomPokemon(rawPokemonData); 
let pokemonThree = getRandomPokemon(rawPokemonData); 

while (pokemonOne.id === pokemonTwo.id) {
    pokemonOne = getRandomPokemon(rawPokemonData);
}
while (pokemonTwo.id === pokemonThree.id) {
    pokemonTwo = getRandomPokemon(rawPokemonData);
}
while (pokemonThree.id === pokemonOne.id) {
    pokemonThree = getRandomPokemon(rawPokemonData);
}

radios[0].value = pokemonOne.id;
images[0].src = pokemonOne.url_image;

radios[1].value = pokemonTwo.id;
images[1].src = pokemonTwo.url_image;

radios[2].value = pokemonThree.id;
images[2].src = pokemonThree.url_image;

// set event listeners to update state and DOM

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {
        
        pokemonCaptured++;
        pokemonEncountered++;
        next.classList.toggle('hidden');

        for (let i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
            images[i].style.opacity = .5;
        }

        const playerCapturedPokemon = e.target.value === pokemonCaptured.id;
        const playerEncounteredPokemon = e.target.value === pokemonEncountered.id;

        //go into pokemon array and increment times captured i.e. shopping cart pokemon. e.target.value is used to decide which pokemon to mutate

        if (playerCapturedPokemon) {
            
        }
    });
}