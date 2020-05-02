import React from "react";
import { createContext } from "react";
import { Countries, Currencies, Places } from "./../api-requests";
import { Spin } from "antd";
import { ModalError } from "./../components/ModalError";

export const AppContext = createContext({
  countries: [],
  currencies: [],
  places: [],
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
      // const { data: places } = await Places.get();
      // console.log("places", places);
      this.setState({
        countries: countries.Countries,
        currencies: currencies.Currencies,
      });
    } catch (err) {
      console.log("error!!!!!!!!!!!!!!!", err);
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
            <Spin style={{ marginTop: 50 }} />
          </div>
        )}
      </AppContext.Provider>
    );
  }
}
