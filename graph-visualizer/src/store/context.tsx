import { useLocalStore } from 'mobx-react-lite'
import React from 'react'

import { createStore, TStore } from './store'

const StoreContext = React.createContext<TStore | null>(null)

export const DataStoreProvider = ({ children }: { children: unknown }): React.ReactElement => {
  const store = useLocalStore(createStore)

  return <StoreContext.Provider value={store}>{children}. </StoreContext.Provider>
}

export const useDataStore = (): TStore => {
  const store = React.useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }

  return store
}
