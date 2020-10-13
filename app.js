// import functions and grab DOM elements
import { pokemonData } from './pokemon.js';
import { findById, getFromLocalStorage, setInLocalStorage } from './utils.js';

const radios = document.querySelectorAll('input');
const next = document.querySelector('button');
const captured = document.querySelector(':checked');
const images = document.querySelectorAll('label > img');

// initialize state
let pokemonCaptured = 0;
const pokemonEncountered = [];



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

}

randomizePokemon();

console.log(pokemonEncountered);
//addEventListener(randomizePokemon);
// set event listeners to update state and DOM
const resultsArray = [];

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {
        
        radios.forEach ((radio) => {
            let pokemon = findById(resultsArray, Number(radio.value));
            console.log(radio.value);

            if (!pokemon) {
                const newPokemon = findById(pokemonData, Number(radio.value));
                pokemon = {
                    id: Number(radio.value),
                    name: newPokemon.pokemon,
                    encountered: 1,
                    captured: 0,
                };
                resultsArray.push(pokemon);
            } else {
                pokemon.encountered++;
            }
        });

        for (let i = 0; i < radios.length; i++) {
            images[i].style.opacity = .5;
        }
        pokemonCaptured++;
        randomizePokemon();
        // const playerCapturedPokemon = e.target.value === pokemonCaptured.id;
        // const playerEncounteredPokemon = e.target.value === pokemonEncountered.id;
        
        

        console.log(pokemonCaptured);

        //go into pokemon array and increment times captured i.e. shopping cart pokemon. e.target.value is used to decide which pokemon to mutate

    });
}

// const captured = document.querySelector(':checked');
//         captured.value = ''
// const pokemonInCart = findById(theIdOfThePokemonTheyCaptured, pokemonShoppingCart);
        // pokemonInCart.captured++;
        // savePokemon(pokemonShoppingCart)