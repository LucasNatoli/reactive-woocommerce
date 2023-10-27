import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export function CustomersTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Nombre</TableCell>
        <TableCell>Apellido</TableCell>
        <TableCell>Creado el</TableCell>
      </TableRow>
    </TableHead>
  );
}
