
// fetch data function
// catches the users' input and searches for pokemon 

async function fetchPokemon() {
    const img = document.querySelector('img')
    const input = document.querySelector('input')
    let pokemonName = input.value.toLowerCase()

    // the Pokemon free api with base of all pets.
    // the pokemon's name is stored inside a variable

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    const response = await fetch(url)

    // try & catch blocks to avoid method chaning with .then() 

    try {

        // check if response's status is not 200, so data can't be found

        if (response.ok !== true) {
            throw new Error('Page does not exist')
        }

        // if status is fine,
        // convert the response into JSON object
        // to get pokemon's icon and name

        const data = await response.json()

        // after that, image should be displayed 

        img.style.display = 'block'
        img.src = data.sprites.front_default
    }

    // console the error if there's one 

    catch (error) {
        console.error(error)
    }
}

// check if user's offline because of fetch network function 

window.addEventListener('offline', userIsOffline)

async function userIsOffline() {
    alert('Похоже, что вы не в сети')
}