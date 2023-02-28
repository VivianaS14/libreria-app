import React from 'react';
import {Box, CardContent, Typography} from "@mui/material";

const ItemService = ({nameService, nameUser, phone, description}) => {
    return (
        <Box sx={{ m:2}}>
            <Typography variant="h6" sx={{color:"#efefef", textAlign: 'center', mt:3}}>{nameService}</Typography>
            <hr style={{height:3, backgroundColor:"#bd8f53",border: 'none'}} />
            <CardContent >
                <Typography variant="body2" sx={{color:"#efefef"}}>{description}</Typography>
            </CardContent>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',mt:3}}>
                <Typography variant="span" sx={{color:"#efefef"}}>{nameUser}</Typography>
                <Typography variant="span" sx={{color:"#efefef"}}>{phone}</Typography>
            </Box>
        </Box>
    );
};

export default ItemService;