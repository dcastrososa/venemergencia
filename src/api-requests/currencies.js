import { Connection } from "./Connection";

class CurrenciesRaw {
  constructor() {
    this.path = "apiservices/reference/v1.0/currencies";
  }

  get() {
    return Connection.get(this.path);
  }
}

export const Currencies = new CurrenciesRaw();
