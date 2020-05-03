import { Connection } from "./Connection";
import config from "./../config";
const { LOCALE } = config;

class PlacesRaw {
  constructor() {
    this.path = "apiservices/autosuggest/v1.0";
  }

  /**
   * @param {String} query 
   * @param {String} country, Code of country 
   * @param {String} currency, Code of currency 
   */
  get(query, country, currency) {
    return Connection.get(
      `${this.path}/${country}/${currency}/${LOCALE}/?query=${query}`
    );
  }
}

export const Places = new PlacesRaw();
