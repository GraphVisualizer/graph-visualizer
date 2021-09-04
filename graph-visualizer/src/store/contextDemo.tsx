import { useLocalObservable } from 'mobx-react-lite'
import React from 'react'

import { createStoreDemo, TStore } from './storeDemo'

const StoreContext = React.createContext<TStore | null>(null)

export const DataStoreProvider = ({ children }: { children: unknown }): React.ReactElement => {
  const store = useLocalObservable(createStoreDemo)

  return <StoreContext.Provider value={store}>{children}. </StoreContext.Provider>
}

export const useDataStoreDemo = (): TStore => {
  const store = React.useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }

  return store
}
