import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
const api = axios.create({ baseURL: 'https://api.hgbrasil.com/weather?format=json-cors' });

export { axios, api }