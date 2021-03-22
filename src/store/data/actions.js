import { api } from "../../boot/axios";

export function getData(context) {
  console.log("action");
  api.get().then(response => {
    context.commit("SET_WEATHER_DATA", response.data);
  });
}
