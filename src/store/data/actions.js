import { axios } from "../../boot/axios";

export async function getData({ commit }, city) {
  let url = "https://api.hgbrasil.com/weather?format=json-cors&key=6a71fa22";

  if (city) {
    url = url +"&city_name="+ city;
  }


  let response = await axios({ baseURL: url });
  commit("SET_WEATHER_DATA", response.data.results);
}
