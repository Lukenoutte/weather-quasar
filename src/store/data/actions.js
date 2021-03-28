import { axios } from "../../boot/axios";

export function getData({ commit }, city) {
  let key = "2c263fac";

  let url = "https://api.hgbrasil.com/weather/?locale=pt&format=json-cors&key=" + key;

  if (city) {
    url = url + "&city_name=" + city;
  }

  axios
    .get(url)
    .then(response => {
      commit("SET_WEATHER_DATA", response.data.results);
    })
    .catch(err => {
      if (err) {
        this.$router.push({ path: "/404" });
      }
    });
}
