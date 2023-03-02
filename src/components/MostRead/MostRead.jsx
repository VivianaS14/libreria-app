import React from 'react';
import {data} from './utils/data';
import {Container, Grid, Typography} from "@mui/material";
import CardMostRead from "./CardMostRead/CardMostRead";
const MostRead = () => {
    return (
        <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
            <Typography variant="h4" sx={{mb: 2}}>Lo mas leído</Typography>
            <Grid maxWidth="lg" container columns={{xs: 4, sm:10, md:12}}>
                {
                    data.map(card => (
                        <Grid item sx={{mb:2, pl:1}} xs={2} sm={4} md={4} key={card.id}>
                            <CardMostRead
                                nameBook={card.nameBook}
                                image={card.image}
                                score={card.score}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default MostRead;