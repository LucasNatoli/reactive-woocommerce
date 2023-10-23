import { useEffect, useState } from "react"
import { getProducts } from "../../services/woocommerce";
import { useStores } from "../stores/useStores";

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [prodsLoading, setProdsLoading] = useState(false)
  const [currStore, setCurrStore] = useState(0)
  const {stores} = useStores()

  function setStore(index) {
    setCurrStore(index)
  }

  useEffect(() => {

    if (stores.length===0) return 
    setProdsLoading(true)
    getProducts(stores[currStore].url, stores[currStore].basicAuth).then(
      response => {
        if (response.success) setProducts(response.data)
        else setProducts([])
        setProdsLoading(false)
      },
      err => {
        setProdsLoading(false)
        console.error(err)
      }
    )
  }, [stores])

  return { products, prodsLoading, setStore }
}
