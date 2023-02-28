import React from 'react';
import {data} from './utils/dataServices';
import {Box, Typography} from "@mui/material";
import ItemService from "./ItemServices/ItemService.jsx";
import {settings} from './utils/settingsSlick';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Service = () => {
    return (
        <Box maxWidth="xl"
                   sx={{
                       backgroundColor: "#314028",
                       height:500,
                       pl:10,
                       pr:10
                   }}
        >
            <Box sx={{display: 'flex', justifyContent: 'center', pt:10}}>
                <Typography variant="h4">Servicios</Typography>
            </Box>
            <Slider {...settings}>
                {
                    data.map(item => (
                        <ItemService
                            key={item.id}
                            nameService={item.service}
                            description={item.description}
                            nameUser={item.nameUser}
                            phone={item.phone}
                        />
                    ))
                }
            </Slider>
        </Box>
    );
};

export default Service;