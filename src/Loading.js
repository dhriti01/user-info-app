import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Unstable_Grid2';

function Loading() {
    return (<Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}>

        <Grid item xs={3} style={{textAlign: "center"}}>
            <CircularProgress />
        </Grid>
   
    </Grid>);
}

export default Loading;