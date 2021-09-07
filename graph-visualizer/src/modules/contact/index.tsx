import React from 'react'

import ContactTemplate from './template'

const App: React.FunctionComponent = () => {
  return (
    <ContactTemplate
      personArray={[
        {
          img: 'https://i.imgur.com/WjpFXkj.jpeg',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque mollis velit ut malesuada. Donec volutpat leo ut odio aliquet molestie. Morbi tincidunt ante eu odio rutrum vulputate. Maecenas ac diam augue. Vivamus felis lacus, euismod eu enim placerat, consequat vulputate lectus. Nunc ut nulla vitae odio pretium pharetra. Aliquam posuere, lacus id rutrum tincidunt, nunc arcu posuere enim, non facilisis erat mi et massa. Sed vitae odio a arcu viverra placerat id sit amet dui. Vivamus et eleifend ligula, non cursus nisi. Ut commodo consectetur diam, a faucibus sapien interdum eu. Sed ut metus a justo tristique volutpat ornare in massa. In rutrum pharetra mi, quis aliquet mauris fringilla nec. Proin dignissim nibh pellentesque, sollicitudin diam eu, lobortis nisi. Donec fringilla, nulla in malesuada dapibus, magna dolor sagittis libero, auctor pharetra enim ex a nisi.',
        },
        {
          img: 'https://i.imgur.com/WjpFXkj.jpeg',
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque mollis velit ut malesuada. Donec volutpat leo ut odio aliquet molestie. Morbi tincidunt ante eu odio rutrum vulputate. Maecenas ac diam augue. Vivamus felis lacus, euismod eu enim placerat, consequat vulputate lectus. Nunc ut nulla vitae odio pretium pharetra. Aliquam posuere, lacus id rutrum tincidunt, nunc arcu posuere enim, non facilisis erat mi et massa. Sed vitae odio a arcu viverra placerat id sit amet dui. Vivamus et eleifend ligula, non cursus nisi. Ut commodo consectetur diam, a faucibus sapien interdum eu. Sed ut metus a justo tristique volutpat ornare in massa. In rutrum pharetra mi, quis aliquet mauris fringilla nec. Proin dignissim nibh pellentesque, sollicitudin diam eu, lobortis nisi. Donec fringilla, nulla in malesuada dapibus, magna dolor sagittis libero, auctor pharetra enim ex a nisi.',
        },
      ]}
    />
  )
}

export default App
