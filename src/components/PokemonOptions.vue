<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" 
          :key="pokemon.id"
          @click="$emit('select',pokemon.id)">
        {{pokemon.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import type { PokemonName } from '../interfaces/pokemon'

  export default {
    props:{
      pokemons:{
        type:Array<PokemonName>,
        required:true
      }
    },
    name:"PokemonOptions",
    
  }
</script>

<style>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    text-align: center;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
</style>