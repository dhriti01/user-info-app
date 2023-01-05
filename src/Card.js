import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CardComp(props) {
    return (<Card sx={{ maxWidth: 345 }} className="userInfoCard">
        <CardActionArea>
            <div className="avatar-container">
                <img className="avatar" src={props.userInfo.avatar} alt="" />
            </div>
        <CardContent>
          <Typography gutterBottom noWrap variant="h5" component="div" align="center">
          {props.userInfo.first_name + " " + props.userInfo.last_name}
          </Typography>
          <Typography variant="body2" noWrap color="text.secondary" align="center">
          {props.userInfo.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>);
}

export default CardComp;