import axios from "axios";
const API_BASE_URL = "https://swapi.dev/api/people/";

// async function GetPeopleApi(
//     searchTerm: string = "",
//     page: number = 1
//   ): Promise<SearchResult> {
//     const response = await fetch(
//       `${API_BASE_URL}?search=${searchTerm}&page=${page}`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return response.json();
//   }

// async function GetPokemon(url, searchTerm = "", page = 1) {
//   try {
//     const res = await axios.get(url);
//     const { results, count } = res.data;
//     const totalPages = Math.ceil(count / 20); // assuming 20 items per page
//   } catch (error) {
//     console.error("Error fetching Pokémon data:", error);
//   }
// }

async function GetPokemon(url, searchTerm = "", page = 1) {
  // this.setState({ loading: true });
  try {
    const offset = (page - 1) * 20; // Calculate offset based on page number
    const res = await axios.get(`${url}?offset=${offset}&limit=20`);
    return res;
    // const { results, count } = res.data;
    // const totalPages = Math.ceil(count / 20); // assuming 20 items per page
    // this.setState({
    //   pokemon: results,
    //   totalPages: totalPages,
    //   loading: false,
    // });
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    // this.setState({ loading: false });
  }
}
export default GetPokemon;
