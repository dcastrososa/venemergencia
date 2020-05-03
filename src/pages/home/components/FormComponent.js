import React, { useContext } from "react";
import {
  Form,
  Select,
  DatePicker,
  Button,
  Row,
  Card,
  AutoComplete,
} from "antd";
import { AppContext } from "../../../context/App.context";
import { useFormComponentLogic } from "./FormComponentLogic";
import { withRouter } from "react-router";
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

const FormComponentRaw = ({ history }) => {
  const [form] = Form.useForm();
  const { currencies, countries } = useContext(AppContext);
  const {
    onSeachPlaceOrigin,
    placesOrigin,
    onSearchPlaceDestination,
    placesDestination,
    onFinish,
  } = useFormComponentLogic(form, history);

  return (
    <Row>
      <Card>
        <Form {...layout} onFinish={onFinish} form={form}>
          <Item
            label="Pais"
            rules={[
              {
                required: true,
                message: "Por favor selecciona el pais",
              },
            ]}
            name="country"
          >
            <Select showSearch>
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
            name="currency"
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
            name="originplace"
          >
            <AutoComplete
              onSearch={onSeachPlaceOrigin}
              options={placesOrigin}
            />
          </Item>

          <Item
            label="Ciudad Destino"
            rules={[
              {
                required: true,
                message: "Por favor selecciona la ciudad de destino",
              },
            ]}
            name="destinationplace"
          >
            <AutoComplete
              onSearch={onSearchPlaceDestination}
              options={placesDestination}
            />
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
            name="dates"
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

export const FormComponent = withRouter(FormComponentRaw);
