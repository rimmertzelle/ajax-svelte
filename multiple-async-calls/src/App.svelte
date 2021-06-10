<script>
  import { onMount } from "svelte";
  import { getSwapiData } from "./apihelper";
  
  //state of the component.
  let character;
  let movies = [];
  
  onMount(async () => {
    getSwapiData("https://swapi.dev/api/people/1/")
      .then((data) => {
        character = data;
        //Execute Promise all to find all films based on the data from the first call and return them to use it in the .then chain
        return Promise.all(
          data.films.map((film) => {
            return getSwapiData(film);
          })
        );
      })
      .then((films) => {
        console.log("films", films);
        console.log("character", character);
        movies = films;
      });
  });
  console.log(movies);
</script>

<h1>Starwar</h1>

<div class="photos">
  {#if character}
    <p>Name: {character.name}</p>
  {/if}
  <ul>
    {#each movies as movie}
      <li>The movie is {movie.title}</li>
    {/each}
  </ul>
</div>

<style>
</style>