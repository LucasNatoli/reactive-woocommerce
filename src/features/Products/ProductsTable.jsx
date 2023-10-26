import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { ProductsTableHead } from "./ProductsTableHead";
import { ProductsTableRow } from "./ProductsTableRow";

import { useGetProductsQuery } from "../api/wooSlice";

export function ProductsTable({ store }) {
  const {
    data: products,
    isSuccess,
  } = useGetProductsQuery({
    url: store.url,
    token: store.basicAuth,
  });

  return (
    <Table size="small">
      <ProductsTableHead />
      <TableBody>
        {isSuccess && products.map((product) => (
          <ProductsTableRow product={product} key={product.id}/>
        ))}
      </TableBody>
    </Table>
  );
}
