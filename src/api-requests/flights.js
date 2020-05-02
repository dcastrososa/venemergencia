import { Connection } from "./Connection";
import axios from "axios";

class FlightsRaw {
  constructor() {
    this.path = "";
  }

  get() {
    return fetch(
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01?inboundpartialdate=2020-12-01",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "be1b6f96e0msh604527e7d1d69abp183e17jsn23dd3582f7fd",
        },
      }
    );
  }
}

export const Flights = new FlightsRaw();
