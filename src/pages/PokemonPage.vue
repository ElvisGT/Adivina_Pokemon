<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿ Quién es este pokemon ?</h1>

    <h2>Vidas: {{lifes}}</h2>

    <PokemonImage :pokemonID="pokemon.id" :showPokemon="isPokemonSelected"/>
    <PokemonOptions :pokemons="pokemonsArr"
                    @select="checkAnswer"/>

    <div class="message fade-in" v-if="isPokemonSelected">
      <h3>{{message}}</h3>
      <button class="message-game-reset"
              @click="newGame">
        {{buttonMsg}}
      </button>
      
    </div>
  </div>


</template>

<script lang="ts">
  import PokemonImage from '@/components/PokemonImage.vue';
  import PokemonOptions from '@/components/PokemonOptions.vue';
  import getPokemonsOptions from '@/helpers/getPokemonOption';
  import type { PokemonData } from '../interfaces/pokemon';

  export default {
    name:"PokemonPage",
    components:{
      PokemonOptions,
      PokemonImage
    },
    data():PokemonData{
      return {
        pokemonsArr:[],
        pokemon:null,
        isPokemonSelected:false,
        message:"",
        lifes:3,
        buttonMsg:"Siguiente ronda"
      }
    },
    methods:{
      async getPokemons(){
        //@ts-ignore
        this.pokemonsArr = await getPokemonsOptions();

        const randInt = Math.floor(Math.random() * 4);
        this.pokemon = this.pokemonsArr[randInt];        
      },
      checkAnswer(pokemonId:number){
        this.isPokemonSelected = true;
        const pokemonFinded = this.pokemon?.id === pokemonId;

        if(pokemonFinded){
          this.message = `Felicidades has acertado, ${this.pokemon?.name}`;

        }else {
          this.message = `Oops, era ${this.pokemon?.name}, perdiste una vida`;
          this.lifes--;
        }

      },
      
      newGame(){
        this.pokemonsArr = []
        this.isPokemonSelected = false
        this.getPokemons()
        this.pokemon = null
      }
    },
    mounted(){
      this.getPokemons();
    },
    watch:{
      lifes(value){
        if(value === 0){
          this.buttonMsg = "Reiniciar juego"
          this.message = "GAME OVER"
          this.lifes = 3
        } 
      }
    }
    
  }
   
</script>

<style>
  .message{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .message-game-reset{
    margin-top: 20px;
    border-radius: 10px;
    width: 200px;
    height: 35px;
    background-color: #2ca37b;
    color: white;
    border: none;
  }

  .message-game-reset:hover {
    cursor: pointer;
    background-color: #0d442b;
    transition: .1s ease-in-out;


  }
</style>