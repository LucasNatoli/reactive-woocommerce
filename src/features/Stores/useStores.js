import { useEffect, useState } from "react"
import { restapiService } from "../../services/restapi"
import { localService } from "../../services/local"
export function useStores() {

  const [stores, setStores] = useState([])
  const [storesLoading, setStoresLoading] = useState(false)
  const [fetchError, setFetchError] = useState()

  const fetchStores = () => {
    setStoresLoading(true)
    restapiService.getStores().then(
      response => {
        if (response.success) {
          setStores(response.data)
          localService.setStores(response.data)
        }
        else {
          setFetchError(response.data.message)
          setStores([])
        }
        setStoresLoading(false)
      },
      error => {
        setFetchError(error)
        setStoresLoading(false)
        setStores([])
      }
    )
  }

  const resetError = () => {
    setFetchError()
  }

  useEffect(() => {
    var stores = localService.getStores()
    if (stores.length > 0) setStores(stores)
    else fetchStores()
  }, [])

  return { storesLoading, stores, fetchError, resetError }
}