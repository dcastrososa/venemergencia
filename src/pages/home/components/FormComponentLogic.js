import { message } from "antd";
import { useState } from "react";
import { Places } from "./../../../api-requests";
import config from "./../../../config";
const { LOCALE } = config;
let placesOriginRaw = [];
let placesDestinationRaw = [];

export const useFormComponentLogic = (formRef, history) => {
  const { getFieldValue } = formRef;
  const [placesOrigin, setPlacesOrigin] = useState([]);
  const [placesDestination, setPlacesDestination] = useState([]);

  const validatePlaceSearch = () => {
    message.destroy();
    const currency = getFieldValue("currency");
    const country = getFieldValue("country");
    if (!currency || !country)
      return message.error("Por favor eliga la moneda y el pais!");
  };

  const getPlaces = async (value) => {
    const { data } = await Places.get(
      value,
      getFieldValue("country"),
      getFieldValue("currency")
    );
    return data.Places;
  };

  const onSeachPlaceOrigin = async (value) => {
    if (validatePlaceSearch()) return;
    try {
      const PlacesData = await getPlaces(value);
      placesOriginRaw = PlacesData;
      setPlacesOrigin(
        PlacesData.map(({ PlaceName }) => ({ value: PlaceName }))
      );
    } catch (err) {
      message.error("Error buscando origen, intente nuevamente");
    }
  };

  const onSearchPlaceDestination = async (value) => {
    if (validatePlaceSearch()) return;
    try {
      const PlacesData = await getPlaces(value);
      placesDestinationRaw = PlacesData;
      setPlacesDestination(
        PlacesData.map(({ PlaceName }) => ({ value: PlaceName }))
      );
    } catch (err) {
      message.error("Error buscando destino, intente nuevamente");
    }
  };

  const onFinish = (values) => {
    try {
      const {
        country,
        currency,
        originplace: origin,
        destinationplace: destination,
        dates,
      } = values;

      const originplace = placesOriginRaw.find(
        ({ PlaceName }) => PlaceName === origin
      ).PlaceId;
      const destinationplace = placesDestinationRaw.find(
        ({ PlaceName }) => PlaceName === destination
      ).PlaceId;
      const [initDate, endDate] = dates;
      const outboundpartialdate = initDate.format("YYYY-MM-DD");
      const inboundpartialdate = endDate.format("YYYY-MM-DD");
      history.push(
        `/search/${country}/${currency}/${LOCALE}/${originplace}/${destinationplace}/${outboundpartialdate}/${inboundpartialdate}`
      );
    } catch (err) {
      message.error(
        "Por favor verifique la ciudad origen/destino este presente en la lista!"
      );
    }
  };

  return {
    onSeachPlaceOrigin,
    placesOrigin,
    onSearchPlaceDestination,
    placesDestination,
    onFinish,
  };
};
