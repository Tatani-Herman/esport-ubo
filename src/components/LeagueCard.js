import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function LeagueCard({league}) {
    const history = useHistory()
  return (
    <Card sx={{ minWidth: 345, width: 610 }} style={{ margin: "35px" }} >
      <CardActionArea onClick={() => {console.log("clicked!")}}>
        <CardMedia
          component="img"
          height="150"
          image={league && league.image_url}
          alt="league picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
			  {league && league.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}