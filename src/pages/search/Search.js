import React from "react";
import { Header } from "./../../components/Header";
import { Body } from "../../components";
import { Table } from "antd";
import { useSearchLogic } from "./SearchLogic";

export const Search = ({ history }) => {
  const { results, loading, columnsTable } = useSearchLogic();
  
  return (
    <>
      <Header title="Resultados" onBack={() => history.push("/")} />
      <Body>
        <Table dataSource={results} columns={columnsTable} loading={loading} />
      </Body>
    </>
  );
};
