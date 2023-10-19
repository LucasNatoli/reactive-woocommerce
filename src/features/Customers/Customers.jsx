import NoStores from "../ui/NoStores";
import { useStores } from "../Stores/useStores";
import Title from "../ui/Title";
export default function Customers() {
  const { stores, storesLoading } = useStores();

  return (
    <>
      <Title>Clientes</Title>
      {stores.length=== 0 && <NoStores />}

    </>
  );
}
