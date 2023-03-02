import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {dataOrder} from '../utils/orderBooks';
const OrderBooks = () => {
    const [order, setOrder] = React.useState('');
    const handleChange = (event) => {
        setOrder(event.target.value);
    };
    return (
        <React.Fragment>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="ordenar" color="secondary">Ordenar por  </InputLabel>
                <Select
                    sx={{width: 180}}
                    color="secondary"
                    labelId="ordenar"
                    id="ordenar"
                    value={order}
                    label="Ordenar por "
                    onChange={handleChange}

                >
                    <MenuItem value="">
                        <em>Ninguno</em>
                    </MenuItem>
                    {
                        dataOrder.map(item => (
                            <MenuItem
                                value={item}
                                key={item}
                            >
                                {item}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </React.Fragment>
    )
};

export default OrderBooks;