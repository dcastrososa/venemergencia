import { useEffect, useState, useCallback, useMemo } from "react";
import { Flights } from "./../../api-requests";
import { message } from "antd";

export const useSearchLogic = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const initResults = useCallback(async () => {
    try {
      const response = await Flights.get();
      const json = await response.json();
      setResults(json.Quotes);
    } catch (err) {
      message.error("Lo sentimos, hubo un error, intente mas tarde.");
    } finally {
      setLoading(false);
    }
  }, []);

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
