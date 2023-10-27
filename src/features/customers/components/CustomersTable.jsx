import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { CustomersTableHead } from "./CustomersTableHead";
import { CustomersTableRow } from "./CustomersTableRow";

import { useGetCustomersQuery } from "../../api/wooSlice";

export function CustomersTable({ store }) {
  const {
    data: customers,
    isSuccess,
    isLoading,
  } = useGetCustomersQuery({
    url: store.url,
    token: store.basicAuth,
  });

  return (

    <>
    {isLoading && <h3>Cargando Clientes</h3>}
    <Table size="small">
      <CustomersTableHead />
      <TableBody>
        {isSuccess && customers.map((customer) => (
          <CustomersTableRow customer={customer} key={customer.id}/>
          ))}
      </TableBody>
    </Table>
          </>
  );
}
