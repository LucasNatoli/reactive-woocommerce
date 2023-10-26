import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { OrdersTableHead } from "./OrdersTableHead";
import { OrdersTableRow } from "./OrdersTableRow";

import { useGetOrdersQuery } from "../../api/wooSlice";

export function OrdersTable({ store }) {
  const {
    data: orders,
    isSuccess,
    isLoading,
  } = useGetOrdersQuery({
    url: store.url,
    token: store.basicAuth,
  });
  return (
    <>
      {isLoading && <h3>Cargando Pedidos</h3>}
      <Table size="small">
        <OrdersTableHead />
        <TableBody>
          {isSuccess &&
            orders.map((order) => (
              <OrdersTableRow order={order} key={order.id} />
            ))}
        </TableBody>
      </Table>
    </>
  );
}
