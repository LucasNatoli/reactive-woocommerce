import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import NoStores from "../ui/NoStores";
import Title from "../ui/Title";

import { useProducts } from "./useProducts";
import { useStores } from "../Stores/useStores";

export default function Products() {
  const { stores, storesLoading } = useStores();
  const { prodsLoading, products, setStore } = useProducts(stores);
  return (
    <>
      <Title>Productos</Title>
      {(prodsLoading || storesLoading) && <h3>Cargando...</h3>}
      {stores.length === 0 && <NoStores />}

      {products.length > 0 && (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>sku</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio unit</TableCell>
              <TableCell align="right">Stock unis</TableCell>
              <TableCell align="center">Activo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">
                  {(row.price * 1).toFixed(2)}
                </TableCell>
                <TableCell align="right">{row.stock_quantity}</TableCell>
                <TableCell align="center">
                  {row.purchasable ? "Si" : "No"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
