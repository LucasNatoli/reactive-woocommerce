import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export function ProductsTableRow({ product }) {
  return (
    <TableRow key={product.id}>
      <TableCell>{product.sku}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell align="right">{(product.price * 1).toFixed(2)}</TableCell>
      <TableCell align="right">{product.stock_quantity}</TableCell>
      <TableCell align="center">{product.purchasable ? "Si" : "No"}</TableCell>
    </TableRow>
  );
}
