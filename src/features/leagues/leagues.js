import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";

import LeagueCard from "../../components/LeagueCard";
import { fetchLeagues } from "./leaguesSlice";

export default function Leagues() {
  const leagues = useSelector((state) => state.leagues.leagues);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchLeagues(page));
  }, [page]);

  useEffect(() => {
    dispatch(fetchLeagues());
  }, []);

  useEffect(() => {}, [leagues]);

  const renderCards = () => {
    return leagues.map((l) => {
      return <LeagueCard league={l} />;
    });
  };

  return (
    <Container maxWidth="sm">
      <h1 style={{ margin: "40px auto", width: "20%" }}>Leagues</h1>
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
        {leagues && renderCards()}
        <Pagination page={page} onChange={handleChange} count={10} />
      </div>
    </Container>
  );
}