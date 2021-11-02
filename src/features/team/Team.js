import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchTeamById, unsetTeam } from "./teamSlice";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";

export default function Team() {
  const team = useSelector((state) => state.team.team);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTeamById(id));
    return () => {
      dispatch(unsetTeam());
    };
  }, []);

  useEffect(() => {
    console.log(team);
  }, [team]);

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
          <ImageListItem style={{ width: "100%", height: "auto" }}>
            <img
              style={{ padding: "30px 0" }}
              src={team.image_url}
              loading="lazy"
            />
          </ImageListItem>
          <h1 style={{ marginTop: 30 }}>{team.name}</h1>
          <h2 style={{ fontWeight: "normal", paddingBottom: 50 }}>
            Game: {team.game}
          </h2>
        </Box>
      </Container>
    </>
  );
}