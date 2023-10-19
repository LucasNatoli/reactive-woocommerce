import { useEffect, useState } from "react"
import { restapiService } from "../../services/restapi"
import { localService } from "../../services/local"
export function useStores() {

  const [stores, setStores] = useState([])
  const [storesLoading, setStoresLoading] = useState(false)

  const fetchStores = () => {
    setStoresLoading(true)
    restapiService.getStores().then(
      response => {
        if (response.success) {
          setStores(response.data)
          localService.setStores(response.data)
        }
        else {
          //todo: warn error
          setStores([])
        }
        setStoresLoading(false)
      },
      error => {
        console.error(error)
        setStoresLoading(false)
        setStores([])
      }
    )
  }

  useEffect(() => {
    var stores = localService.getStores()
    if (stores.length > 0) setStores(stores)
    else fetchStores()
  }, [])

  return { storesLoading, stores }
}