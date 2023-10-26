import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Title } from "../../ui/Title";
import { useAddStoreMutation } from "../../api/apiSlice";

export const AddStoreForm = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [clientKey, setClientKey] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const [addNewStore, { isLoading }] = useAddStoreMutation();

  const onNameChanged = (e) => setName(e.target.value);
  const onUrlChanged = (e) => setUrl(e.target.value);
  const onClientKeyChanged = (e) => setClientKey(e.target.value);
  const onSecretKeyChanged = (e) => setSecretKey(e.target.value);

  const canSave =
    Boolean(name) && Boolean(url) && Boolean(clientKey) && Boolean(secretKey);

  async function onSaveStoreClicked() {
    try {
      await addNewStore({ name, url, clientKey, secretKey }).unwrap();
      setName("");
      setUrl("");
      setClientKey("");
      setSecretKey("");
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <section>
      <Title>Nueva Tienda</Title>
      <form>
        <Grid container spacing={2} flexGrow={1}>
          <Grid item xs={12} md={6}>
            <TextField
              id="storeName"
              label="Nombre"
              type="text"
              onChange={onNameChanged}
              value={name}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="storeUrl"
              label="Url de la tienda"
              type="text"
              onChange={onUrlChanged}
              value={url}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="storeClientKey"
              label="Clave Cliente"
              type="password"
              onChange={onClientKeyChanged}
              value={clientKey}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="storeSecretKey"
              label="Clave Secret"
              type="password"
              onChange={onSecretKeyChanged}
              value={secretKey}
              required
              fullWidth
            />
          </Grid>
          <Grid item container xs={12} justifyContent={"flex-end"} m={1}>
            <Button
              onClick={onSaveStoreClicked}
              disabled={!canSave}
              variant={"contained"}
              size="large"
              color="primary"
            >
              Guardar Tienda
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};
