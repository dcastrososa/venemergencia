import { Connection } from "./Connection";

class CountriesRaw {
  constructor() {
    this.path = "countries";
  }

  get() {
    return Connection.get(`${this.path}/en-US`);
  }
}

export const Countries = new CountriesRaw();
