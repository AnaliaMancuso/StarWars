async function getPages() {
    // set some variables
    const baseUrl = `https://swapi.co/api/people/`;
    let page = 1;
    // create empty array where we want to store the people objects for each loop
    let peoplew = [];
    // create a lastResult array which is going to be used to check if there is a next page
    let lastResult = [];
    do {
      // try catch to catch any errors in the async api call
      try {
        // use node-fetch to make api call
        const resp = await fetch(`${baseUrl}?page=${page}`);
        const data = await resp.json();
        lastResult = data;
        data.results.forEach(person => {
          // destructure the person object and add to array
          const { name, height, films } = person;
          peoplew.push({ name, height, films });
        });
        // increment the page with 1 on each loop
        page++;
      } catch (err) {
        console.error(`algo falló ${err}`);
      }
      // keep running until there's no next page
    } while (lastResult.next !== null);
    // let's log out our new peoplew array
    console.log(peoplew);
  
  getPages();

return {
  peoplew
}}
export default getPages;