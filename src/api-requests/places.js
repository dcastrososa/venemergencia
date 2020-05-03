import { Connection } from "./Connection";
import config from "./../config";
const { LOCALE } = config;

class PlacesRaw {
  constructor() {
    this.path = "apiservices/autosuggest/v1.0";
  }

  get(query, country, currency) {
    return Connection.get(
      `${this.path}/${country}/${currency}/${LOCALE}/?query=${query}`
    );
  }
}

export const Places = new PlacesRaw();
