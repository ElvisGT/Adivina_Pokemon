<template>
  <div class="pokemon-container">
    
    <img :src="image" 
          alt="pokemon"
          class="hidden-pokemon">
    
   
    <img v-if="showPokemon" :src="image"
          class="fade-in"
          alt="pokemon">
    
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      pokemonID:{
        type:Number,
        required:true
      },
      showPokemon:{
        type:Boolean,
        required:true,
        default:true
      }
    },
    name:"PokemonImage",
    computed:{
      image(){
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`
      }
    }
  }
</script>

<style scoped>

  img{
    margin-top: 40px;
    height: 150px;
    position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon{
    filter: brightness(0);
  }
  .pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
  }
</style>