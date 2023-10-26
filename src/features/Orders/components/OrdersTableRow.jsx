import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export function OrdersTableRow({ order }) {
  return (
    <TableRow key={order.id}>
      <TableCell>{order.date_created}</TableCell>
      <TableCell align="right">{(order.total * 1).toFixed(2)}</TableCell>
      <TableCell align="center">{order.payment_method_title}</TableCell>
      <TableCell align="center">{order.status}</TableCell>
    </TableRow>
  );
}
