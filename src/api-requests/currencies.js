import { Connection } from "./Connection";

class CurrenciesRaw {
  constructor() {
    this.path = "currencies";
  }

  get() {
    return Connection.get(this.path);
  }
}

export const Currencies = new CurrenciesRaw();
