import { Connection } from "./Connection";
import config from "./../config";
const { LOCALE } = config;

class FlightsRaw {
  constructor() {
    this.path = "apiservices/browsequotes/v1.0";
  }

  /**
   * 
   * @param {String} country, Code of country 
   * @param {String} currency, Code of currency 
   * @param {String} originplace, Code of city of origen 
   * @param {String} destinationplace, Code of city of destination 
   * @param {String} outboundpartialdate, Date in format "YYY-MM-FF" 
   * @param {String} inboundpartialdate, Date in format "YYY-MM-FF" 
   */
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
