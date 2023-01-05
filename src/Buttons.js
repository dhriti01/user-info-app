import React from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Grid from '@mui/material/Unstable_Grid2';

function Buttons(props) {
    return (
        <div className="button-container">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {props.userStore && props.userStore.length && props.userStore.map((user, idx) => {
                    return (
                                <Grid xs={6} sm={4} md={2} key={idx} display="flex" justifyContent="center" alignItems="center">
                                <Zoom in={true}>
                                <Fab id={user.id} className="user-button" onClick={props.handleClick}>{idx+1}</Fab>
                                </Zoom>    
                                </Grid>
                            );
                 })}
            </Grid>
        </div>);
}

export default Buttons;