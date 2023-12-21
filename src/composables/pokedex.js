import axios from "axios";
import { ref } from "vue";

export default function getPokedex(endpoint) {
  const data = ref(null);

  axios
    .get(`https://pokebuildapi.fr/api/v1/pokemon/generation/${endpoint}`)
    .then((response) => (data.value = response.data));

  return { data };
}