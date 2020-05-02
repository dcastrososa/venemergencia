import React, { useContext } from "react";
import { Form, Select, DatePicker, Button, Row, Card } from "antd";
import { AppContext } from "../../../context/App.context";
const { Item } = Form;
const { Option } = Select;
const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const FormComponent = () => {
  const { currencies, countries } = useContext(AppContext);

  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <Row>
      <Card>
        <Form {...layout} onFinish={onFinish}>
          <Item
            label="Pais"
            rules={[
              {
                required: true,
                message: "Por favor selecciona el pais",
              },
            ]}
            name="pais"
          >
            <Select>
              {countries.map(({ Code, Name }) => (
                <Option key={Code} value={Code}>
                  {Name}
                </Option>
              ))}
            </Select>
          </Item>

          <Item
            label="Moneda"
            rules={[
              {
                required: true,
                message: "Por favor selecciona la moneda",
              },
            ]}
            name="moneda"
          >
            <Select>
              {currencies.map(({ Code, Symbol }) => (
                <Option key={Code} value={Code}>
                  {Symbol}
                </Option>
              ))}
            </Select>
          </Item>

          <Item
            label="Ciudad Origen"
            rules={[
              {
                required: true,
                message: "Por favor selecciona la ciudad de origen",
              },
            ]}
            name="ciudad-origen"
          >
            <Select>
              <Option value="ve">Venezuela</Option>
              <Option value="rs">Rusia</Option>
            </Select>
          </Item>

          <Item
            label="Ciudad Destino"
            rules={[
              {
                required: true,
                message: "Por favor selecciona la ciudad de destino",
              },
            ]}
            name="ciudad-destino"
          >
            <Select>
              <Option value="ve">Venezuela</Option>
              <Option value="rsI">Rusia</Option>
            </Select>
          </Item>

          <Item
            label="Fecha Partida/Regreso"
            rules={[
              {
                required: true,
                message:
                  "Por favor selecciona la fecha de partida y fecha de regreso",
              },
            ]}
            name="fechas"
          >
            <RangePicker />
          </Item>

          <Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </Card>
    </Row>
  );
};
