const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover class aberto do pokemon aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        //adicionar class aberto no pokemon selecioando
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idCartaoPokemonAbrir = 'cartao-'+ idPokemonSelecionado
        const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir)
        cartaoPokemonAbrir.classList.add('aberto')
        //remover class ativo do pokemon aberto
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')
        //adicionar class ativo no pokemon selecionado
        const pokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoListagem.classList.add('ativo')
    })
})