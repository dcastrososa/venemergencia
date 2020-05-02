import { Connection } from "./Connection";

class PlacesRaw {
  constructor() {
    this.path = "UK/GBP/en-GB/?query=Stockholm";
  }

  get() {
    return Connection.get(this.path);
  }
}

export const Places = new PlacesRaw();
