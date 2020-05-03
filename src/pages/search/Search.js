import React from "react";
import { Header } from "./../../components/Header";
import { Body } from "../../components";
import { Table } from "antd";
import { useSearchLogic } from "./SearchLogic";
import { Footer } from "../../components/Footer";

export const Search = ({ history, match }) => {
  const { results, loading, columnsTable } = useSearchLogic(match);

  return (
    <>
      <Header title="Resultados" onBack={() => history.push("/")} />
      <Body>
        <Table dataSource={results} columns={columnsTable} loading={loading} />
      </Body>
    </>
  );
};
