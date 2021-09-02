import React from 'react'

import { DataStoreProvider } from '../store/context'
import App from './App'

const AppModule: React.FunctionComponent = () => {
  return (
    <DataStoreProvider>
      <App />
    </DataStoreProvider>
  )
}

export default AppModule
