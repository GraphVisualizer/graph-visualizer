import React from 'react'

import johnFallback from './img/john.jpeg'
import john from './img/john.webp'
import junhyunFallback from './img/junhyun.jpeg'
import junhyun from './img/junhyun.webp'
import ContactTemplate from './template'

const Contact: React.FunctionComponent = () => {
  return (
    <ContactTemplate
      personArray={[
        {
          img: john,
          fallback: johnFallback,
          bio:
            "Hiya, I'm John Lu, and I recently graduated from Santa Clara University with a Bachelor's in Computer Science. My hobbies include poetry, cooking, web dev, and longboarding. ",
          alt: "John's profile",
        },
        {
          img: junhyun,
          fallback: junhyunFallback,
          bio: "Yo what's up. I'm Junhyun Lim, a Math & Computer Science graduate from Santa Clara University.",
          alt: "Junhyun's profile",
        },
      ]}
    />
  )
}

export default Contact
