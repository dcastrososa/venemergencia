import { Connection } from "./Connection";
import config from "./../config";
const { LOCALE } = config;

class FlightsRaw {
  constructor() {
    this.path = "apiservices/browsequotes/v1.0";
  }

  get(
    country,
    currency,
    originplace,
    destinationplace,
    outboundpartialdate,
    inboundpartialdate
  ) {
    return Connection.get(
      `${this.path}/${country}/${currency}/${LOCALE}/${originplace}/${destinationplace}/${outboundpartialdate}?inboundpartialdate=${inboundpartialdate}`
    );
  }
}

export const Flights = new FlightsRaw();
