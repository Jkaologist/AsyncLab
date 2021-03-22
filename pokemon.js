const BASE_URL = 'https://pokeapi.co/api/v2'

async function getAllPokemon() {
   const resp = await axios.get(`${BASE_URL}/pokemon?limit=1118`);
   return resp.data;
}

