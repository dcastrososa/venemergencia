import { useEffect, useState, useCallback, useMemo } from "react";
import { Flights } from "./../../api-requests";
import { message } from "antd";

export const useSearchLogic = (match) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const initResults = useCallback(async () => {
    try {
      const { params } = match;
      const {
        country,
        currency,
        originplace,
        destinationplace,
        outboundpartialdate,
        inboundpartialdate,
      } = params;
      const { data } = await Flights.get(
        country,
        currency,
        originplace,
        destinationplace,
        outboundpartialdate,
        inboundpartialdate
      );
      setResults(data.Quotes);
      if (!data.Quotes.length)
        message.warning("No se encontraron resultados :(");
    } catch (err) {
      message.error("Lo sentimos, hubo un error. Intente buscando nuevamente");
    } finally {
      setLoading(false);
    }
  }, [match]);

  useEffect(() => {
    initResults();
  }, [initResults]);

  const columnsTable = useMemo(
    () => [
      {
        title: "Vuelo directo",
        dataIndex: "Direct",
        key: "Direct",
        render: (direct) => (direct ? "Si" : "No"),
      },
      {
        title: "Precio Minimo",
        dataIndex: "MinPrice",
        key: "MinPrice",
        render: (value) => `${value},00 ${match.params.currency}`,
      },
      {
        title: "Fecha de Salida",
        dataIndex: "OutboundLeg.DepartureDate",
        key: "OutboundLeg.DepartureDate",
        render: (text, record) =>
          record.OutboundLeg.DepartureDate.split("T")[0],
      },
    ],
    []
  );

  return { results, loading, columnsTable };
};
