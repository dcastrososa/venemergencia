import { Connection } from "./Connection";
import config from "./../config";
const { LOCALE } = config;

class CountriesRaw {
  constructor() {
    this.path = `apiservices/reference/v1.0/countries/${LOCALE}`;
  }

  get() {
    return Connection.get(`${this.path}`);
  }
}

export const Countries = new CountriesRaw();
