import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { fetchLeague, unsetLeague } from "./leagueSlice";
import Team from "../team/Team";

export default function League() {
  const league = useSelector((state) => state.league.league);
  const dispatch = useDispatch();
  const { id } = useParams();
  const date = league && new Date(league.begin_at);

  useEffect(() => {
    dispatch(fetchLeague(id));
    console.log(id);
    return () => {
      dispatch(unsetLeague());
    };
  }, []);

  useEffect(() => {
    console.log(league);
  }, [league]);

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "inherite",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifContent: "center",
            flexDirection: "column",
            marginBottom: "50px",
          }}
        >
          <ImageListItem style={{ width: "80%", height: "auto" }}>
            <img
              style={{ padding: "30px 0" }}
              src={league.image_url}
              loading="lazy"
            />
          </ImageListItem>
          <h1>{league.name}</h1>
          <h2 style={{ fontWeight: "normal" }}>Game: {league.game}</h2>
          <div style={{ paddingBottom: 30 }}>
            <Card
              sx={{
                minWidth: 300,
                width: 500,
                height: 300,
                textAlign: "center",
              }}
              style={{ height: "100%" }}
            >
              <CardContent>
                <div class="jss16">
                  <span>{league.full_name}</span>
                </div>
                <div class="jss16">
                  <span>{date.toString()}</span>
                </div>
              </CardContent>
              {league.winner_id && (
                <Link to={"/teams/" + league.winner_id} style={{ textDecoration: "none" }}>
                  <Button variant="text">&#127942; Winner</Button>
                </Link>
              )}
            </Card>
          </div>
        </Box>
      </Container>
    </>
  );
}