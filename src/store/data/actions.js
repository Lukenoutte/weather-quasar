import { axios } from "../../boot/axios";

export function getData({ commit }, city) {
  let key = "33d917e3";
  let url = "https://api.hgbrasil.com/weather?format=json-cors&key=" + key;

  let headers = {
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin",
    "Content-Type": "application/json", 
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "8640"
  };

  if (city) {
    url = url + "&city_name=" + city;
  } else {
    url = "https://api.hgbrasil.com/weather?format=json-cors";
  }

  axios({headers, baseURL: url })
    .then(response => {
      commit("SET_WEATHER_DATA", response.data.results);
    })
    .catch(err => {
      if (err) {
        this.$router.push({ path: "/404" });
      }
    });
}
