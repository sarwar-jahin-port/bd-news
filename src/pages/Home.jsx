import React from 'react'
import CategoryNewspapers from '../components/CategoryNewspapers'
import { Helmet } from 'react-helmet'


const Home = () => {
  return (
    <div>
        <Helmet>
              <title>BD NEWS | HOME</title>
          </Helmet>
        <CategoryNewspapers/>
    </div>
  )
}

export default Home