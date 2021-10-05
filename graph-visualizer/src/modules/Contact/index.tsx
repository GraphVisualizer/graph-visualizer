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
            "Hiya, I'm John Lu, and I recently graduated from Santa Clara University with a Bachelor's in Computer Science. My hobbies include poetry, cooking, web dev, and longboarding. ",
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
