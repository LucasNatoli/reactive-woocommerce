import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://cuatroveintedigital.com/">
        Lucas Natoli
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      <br/>
      {"Powered by 🚀 "}
      <Link color="inherit" href="https://elhosting.cloud/" target="_blank">
        elhosting.cloud
      </Link>
    </Typography>
  );
}