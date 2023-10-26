import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export function OrdersTableHead(){
  return(
    <TableHead>
    <TableRow>
      <TableCell>Fecha</TableCell>
      <TableCell align="right">Total</TableCell>
      <TableCell align="center">Método</TableCell>
      <TableCell align="center">Estado</TableCell>
    </TableRow>
  </TableHead>
  )
}