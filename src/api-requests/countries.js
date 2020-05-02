import { Connection } from "./Connection";

class CountriesRaw {
  constructor() {
    this.path = "countries";
  }

  async get() {
    return await Connection.get(`${this.path}/en-US`);
  }
}

export const Countries = new CountriesRaw();
