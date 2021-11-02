import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";

import TheCard from "../../components/TheCard";
import { fetchTeams } from "./teamsSlice";

export default function Teams() {
  const teams = useSelector((state) => state.teams.teams);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  useEffect(() => {
    dispatch(fetchTeams(page));
  }, [page]);

  useEffect(() => {}, [teams]);

  const renderCards = () => {
    return teams.map((t, key) => {
      return <TheCard key={key} item={t} type="team" />;
    });
  };

  return (
    <Container maxWidth="sm">
      <h1 style={{ margin: "40px auto", width: "20%" }}>Teams</h1>
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: 80,
        }}
      >
        {teams && renderCards()}
        <Pagination page={page} onChange={handleChange} count={10} />
      </div>
    </Container>
  );
}