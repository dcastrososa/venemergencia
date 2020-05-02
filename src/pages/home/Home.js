import React from "react";
import { FormComponent } from "./components";
import { Header, Body } from "./../../components";

export const Home = () => {
  return (
    <>
      <Header title="Inicio" />
      <Body>
        <FormComponent />
      </Body>
    </>
  );
};
