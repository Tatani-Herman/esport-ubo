import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import GamesSelectBox from "../features/games/GamesSelectBox";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            A-Sport Démo UBO
          </Typography>
          <Stack direction="row" spacing={2}>
          <GamesSelectBox/>
          <Link style={{ textDecoration: "none" }} to="/teams">
            <Button
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "1.75",
                letterSpacing: "0.02857em",
                color: "white",
                border: "1px solid white",
              }}
              variant="outlined"
            >
              TEAMS
            </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/leagues">
            <Button
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "1.75",
                letterSpacing: "0.02857em",
                marginLeft: "20px", marginLeft: "20px",
                color: "white",
                border: "1px solid white",
              }}
              variant="outlined"
            >
              LEAGUES
            </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}