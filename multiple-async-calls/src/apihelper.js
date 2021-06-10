/**
 * Async function to get the data from the SWAPI api
 * @returns - returns a promise
 * Maybe create a component for this.
 */
export async function getSwapiData(url) {
  try {
    let response = await fetch(url);
    let character = await response.json();
    return character;
  } catch (err) {
    console.warn("warning", err);
  }
}
