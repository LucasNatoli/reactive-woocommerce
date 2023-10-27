import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export function CustomersTableRow({ customer }) {
  return (
    <TableRow key={customer.id}>
      <TableCell>{customer.name}</TableCell>
      <TableCell>{customer.last_name}</TableCell>
      <TableCell>{customer.date_created}</TableCell>
    </TableRow>
  );
}
