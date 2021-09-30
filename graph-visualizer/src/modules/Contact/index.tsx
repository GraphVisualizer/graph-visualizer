import React from 'react'

import john from './img/john.jpeg'
import junhyun from './img/junhyun.png'
import ContactTemplate from './template'

const Contact: React.FunctionComponent = () => {
  return (
    <ContactTemplate
      personArray={[
        {
          img: john,
          bio:
            "John Lu recently graduated from Santa Clara University with a Bachelor's in Computer Science. His hobbies include poetry, cooking, and longboarding. John's interests in CS lie in web development.",
        },
        {
          img: junhyun,
          bio:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque mollis velit ut malesuada. Donec volutpat leo ut odio aliquet molestie. Morbi tincidunt ante eu odio rutrum vulputate. Maecenas ac diam augue. Vivamus felis lacus, euismod eu enim placerat, consequat vulputate lectus. Nunc ut nulla vitae odio pretium pharetra. Aliquam posuere, lacus id rutrum tincidunt, nunc arcu posuere enim, non facilisis erat mi et massa. Sed vitae odio a arcu viverra placerat id sit amet dui. Vivamus et eleifend ligula, non cursus nisi. Ut commodo consectetur diam, a faucibus sapien interdum eu. Sed ut metus a justo tristique volutpat ornare in massa. In rutrum pharetra mi, quis aliquet mauris fringilla nec. Proin dignissim nibh pellentesque, sollicitudin diam eu, lobortis nisi. Donec fringilla, nulla in malesuada dapibus, magna dolor sagittis libero, auctor pharetra enim ex a nisi.',
        },
      ]}
    />
  )
}

export default Contact
