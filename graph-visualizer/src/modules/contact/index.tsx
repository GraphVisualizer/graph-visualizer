import React from 'react'

import ContactTemplate from './template'

const App: React.FunctionComponent = () => {
  return (
    <ContactTemplate
      personArray={[
        {
          name: 'Justin',
          img: '',
          bio: 'Heyo',
        },
        {
          name: 'James',
          img: '',
          bio: 'Heyo',
        },
      ]}
    />
  )
}

export default App
