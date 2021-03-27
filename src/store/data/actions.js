import { axios } from "../../boot/axios";

export function getData({ commit }, city) {
  let key = "33d917e3";

  let url = "https://api.hgbrasil.com/weather?format=json-cors&key=" + key;

  if (city) {
    url = url + "&city_name=" + city;
  }
  
  axios.defaults.headers = {
    "Access-Control-Allow-Origin": "https://weather-quasar.netlify.app",
  };

  axios({ baseURL: url })
    .then(response => {
      commit("SET_WEATHER_DATA", response.data.results);
    })
    .catch(err => {
      if (err) {
        this.$router.push({ path: "/404" });
      }
    });
}
