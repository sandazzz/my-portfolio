import axios from "axios";
import { ref } from "vue";

export default function usePokemons(endpoint) {
  const data = ref(null);

  axios
    .get(`https://pokebuildapi.fr/api/v1/pokemon/${endpoint}`)
    .then((response) => (data.value = response.data));

  return { data };
}