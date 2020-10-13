// import functions and grab DOM elements
import { pokemonData } from './pokemon.js';
//import { findById, getFromLocalStorage, setInLocalStorage } from './utils.js';

const radios = document.querySelectorAll('input');
const next = document.querySelector('button');
//const capture = document.querySelector('#capture');
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
    console.log(pokemonOne);
    images[0].src = pokemonOne.url_image;

    radios[1].value = pokemonTwo.id;
    images[1].src = pokemonTwo.url_image;

    radios[2].value = pokemonThree.id;
    images[2].src = pokemonThree.url_image;

}

randomizePokemon();
pokemonEncountered.push(
    { 
        pokemon: pokemonOne.pokemon,
        encountered: 0,
        captured: 0,
        
    }, 
    { 
        pokemon: pokemonTwo.pokemon,
        encountered: 0,
        captured: 0,
        
    },
    { 
        pokemon: pokemonThree.pokemon,
        encountered: 0,
        captured: 0,
        
    });

console.log(pokemonEncountered);
//addEventListener(randomizePokemon);
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

        //const pokemonInCart = findById(theIdOfThePokemonTheyCaptured, pokemonShoppingCart);
        //pokemonInCart.captured++;
        //savePokemon(pokemonShoppingCart)

        console.log(playerCapturedPokemon);
        console.log(playerEncounteredPokemon);

        //go into pokemon array and increment times captured i.e. shopping cart pokemon. e.target.value is used to decide which pokemon to mutate

    });
}
