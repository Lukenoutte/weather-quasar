import { api } from "../../boot/axios";

export async function getData({ commit }) {
  let response = await api.get();

  commit("SET_WEATHER_DATA", response.data.results);
}
