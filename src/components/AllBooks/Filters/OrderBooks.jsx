import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { dataOrder } from "../utils/orderBooks";
import { orderName } from "../../../redux/reducer/bookSlices";
import { useDispatch } from "react-redux";

const OrderBooks = () => {
  const dispatch = useDispatch();
  const [valueOrder, setValueOrder] = React.useState("");
  const handleChange = (e) => {
    setValueOrder(e.target.value);
    dispatch(orderName(e.target.value));
  };

  return (
    <React.Fragment>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="ordenar" color="secondary">
          Ordenar por{" "}
        </InputLabel>
        <Select
          sx={{ width: 180 }}
          color="secondary"
          labelId="ordenar"
          value={valueOrder}
          id="ordenar"
          label="Ordenar por "
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          {dataOrder.map((item) => (
            <MenuItem value={item.value} key={item.id}>
              {item.orderBy}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default OrderBooks;
