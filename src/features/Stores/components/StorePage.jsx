import React from "react";
import Paper from "@mui/material/Paper";
import Title from "../../ui/Title";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStoreById } from "../state/storesSlice";

export function StorePage() {
  const { storeId } = useParams();
  const store = useSelector((state) => selectStoreById(state, storeId));

  return (
    <Paper>
      <Title>{store.name}</Title>
      <h2>{store.url}</h2>
    </Paper>
  );
}
