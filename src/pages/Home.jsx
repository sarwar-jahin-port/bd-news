import React from 'react'
import CategoryNewspapers from '../components/CategoryNewspapers'
import { Helmet } from 'react-helmet'


const Home = () => {
  return (
    <div>
        <Helmet>
              <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
              <title>BD NEWS | HOME</title>
              <link rel="home" href="https://bangladeshnewspaper.xyz/" />
          </Helmet>
        <CategoryNewspapers/>
    </div>
  )
}

export default Home