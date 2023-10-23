import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tienda Central', url: 'https://mercadodesemillas.com' },
  { id: '1', name: 'Tienda Dos', url: 'https://tienda-dos.lucasnatoli.space' },
  { id: '2', name: 'Distribuidor', url: 'https://latiendadistri.com' }
]

const StoresSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {}
})

export const selectAllStores = state => state.stores

export const selectStoreById = (state, storeId) =>
state.stores.find(store => store.id === storeId)

export const StoresReducer =  StoresSlice.reducer;