<script>
  import { onMount } from "svelte";

  let characters = [];
  let data;

  onMount(async () => {
    const res = await fetch(`https://swapi.dev/api/people/`);
    data = await res.json();
    characters = data.results;
    console.log(characters);
  });
</script>

<h1>Characters in Starwars movies</h1>

<div class="characters">
  <ul>
    {#each characters as character}
      <li>{character.name}</li>
    {/each}
  </ul>
</div>

<style>
  h1{
    text-align: center;
    background-color: azure;
    padding: 20px;
  }
  .characters {
    font-family: "Courier New", Courier, monospace;
    background-color:aquamarine;
    padding: 30px;
  }
</style>
