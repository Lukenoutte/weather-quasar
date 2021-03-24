export function city(state) {
  return state.weatherData.city;
}

export function temperature(state) {
  return state.weatherData.temp;
}

export function dateAndTime(state) {
  return state.weatherData.date + ", " + state.weatherData.time;
}

export function weekWeather(state) {
  if (state.weatherData.forecast) return state.weatherData.forecast.slice(1, 8);
}

export function condition(state) {
  return state.weatherData.condition_slug;
}

export function humidity(state) {
  return state.weatherData.humidity;
}

export function windySpeedy(state) {
  return state.weatherData.wind_speedy;
}

export function sun(state) {
  return {
    sunrise: state.weatherData.sunrise,
    sunset: state.weatherData.sunset
  };
}
