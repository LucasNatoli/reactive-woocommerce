import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

import {restapiService, localService} from '../../services'
import { useSnackNotification } from '../Notifications/hooks/useSnackNotification';

export default function Login() {

  const navigate = useNavigate();
  const { displaySnackNotification } = useSnackNotification();
  const [showBackdrop, setShowBackdrop] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowBackdrop(true)
    const data = new FormData(event.currentTarget);
    let email = data.get('email');
    let password = data.get('password');
    
    restapiService.login(email, password)
      .then(
        res => {
          if (res.success) {
            localService.setUserSession(res.data)
            navigate(0) 
          } else {
            setShowBackdrop(false)
             displaySnackNotification({ message: res.data.message, type: "warning" })
          }
        },
        err => {
          setShowBackdrop(false)
          displaySnackNotification({ message: err.data, type: "error" })
        }
      );
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Bienvenidos!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Dirección de Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Olvidaste tu password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showBackdrop}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  );
}