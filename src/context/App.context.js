import React from "react";
import { createContext } from "react";
import { Countries, Currencies } from "./../api-requests";
import { Spin } from "antd";
import { ModalError } from "./../components/ModalError";

export const AppContext = createContext({
  countries: [],
  currencies: [],
  loading: true,
  error: "",
});

export class AppConsumer extends React.Component {
  state = {
    countries: [],
    currencies: [],
    loading: true,
  };

  componentDidMount() {
    this.initData();
  }

  async initData() {
    try {
      const { data: countries } = await Countries.get();
      const { data: currencies } = await Currencies.get();
      this.setState({
        countries: countries.Countries,
        currencies: currencies.Currencies,
      });
    } catch (err) {
      this.setState({
        error: "Lo sentimos, hubo un error, intente recargando la pagina!",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { countries, currencies, loading, error } = this.state;

    if (error)
      return (
        <ModalError
          visible={true}
          error={error}
          onOk={() => window.location.reload()}
        />
      );

    return (
      <AppContext.Provider value={{ countries, currencies, loading }}>
        {!loading ? (
          this.props.children
        ) : (
          <div className="full-center">
            <Spin tip="loading" style={{ marginTop: 50 }} />
          </div>
        )}
      </AppContext.Provider>
    );
  }
}
