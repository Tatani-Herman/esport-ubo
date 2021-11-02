import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { useHistory } from "react-router";

export default function TheCard({ item, type = "league" }) {
  const endpoint = type == "league" ? "/leagues/" : "/teams/"
  const history = useHistory()


  return (
      <Link style={{textDecoration: "none"}} to={"/leagues/"+ item.id}>
        <Card sx={{ minWidth: 345, width: 500 }} style={{ margin: "30px" }}>
          <CardActionArea
            onClick={() => {
              console.log("clicked!" + endpoint + item.id, item);
              history.push(endpoint+item.id)
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={item && item.image_url}
              alt="league picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item && item.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
  );
}