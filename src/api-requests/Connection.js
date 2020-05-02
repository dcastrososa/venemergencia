import config from "./../config";
import axios from "axios";
const { API_URL, API_HOST, API_KEY } = config;

class ConnectionRaw {
  headers = {
    "x-rapidapi-host": API_HOST,
    "x-rapidapi-key": API_KEY,
  };

  get(url) {
    return axios.get(`${API_URL}/${url}`, {
      headers: this.headers,
    });
  }
}

export const Connection = new ConnectionRaw();
