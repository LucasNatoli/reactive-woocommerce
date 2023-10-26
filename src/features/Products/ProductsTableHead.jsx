import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export function ProductsTableHead(){
  return(
    <TableHead>
    <TableRow>
      <TableCell>sku</TableCell>
      <TableCell>Nombre</TableCell>
      <TableCell align="right">Precio unit</TableCell>
      <TableCell align="right">Stock unis</TableCell>
      <TableCell align="center">Activo</TableCell>
    </TableRow>
  </TableHead>
  )
}