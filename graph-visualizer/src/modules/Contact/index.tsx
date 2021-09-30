import React from 'react'

import john from './img/john.jpeg'
import junhyun from './img/junhyun.jpeg'
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
          bio: "Yo what's up. I'm Junhyun Lim, a Math & Computer Science graduate from Santa Clara University.",
        },
      ]}
    />
  )
}

export default Contact
