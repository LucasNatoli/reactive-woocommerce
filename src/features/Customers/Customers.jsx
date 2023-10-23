import NoStores from "../ui/NoStores";
import { useStores } from "../stores/useStores";
import Title from "../ui/Title";

export function Customers() {
  const { stores, storesLoading } = useStores();

  return (
    <>
      <Title>Clientes</Title>
      {stores.length=== 0 && <NoStores />}

    </>
  );
}
