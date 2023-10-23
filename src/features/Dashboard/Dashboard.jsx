import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import Deposits from "./Deposits";
import OrdersCard from "../orders/OrdersCard";
const paperStyle = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  height: 240,
  //borderRadius: '9px'
};

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper sx={paperStyle}>
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
      <Paper sx={paperStyle}>
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
      <Paper sx={paperStyle}>
          <OrdersCard />
        </Paper>
      </Grid>
    </Grid>
  );
}
