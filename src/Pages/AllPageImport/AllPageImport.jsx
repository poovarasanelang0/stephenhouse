import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import Home from '../Home/Home'
import HomePagesBottom from '../HomePagesBottom/HomePagesBottom'
import Faq from '../Faq/Faq'
import News from '../../Component/News/News'

const AllPageImport = () => {
  return (
    <div>
        <Header />
        <Home />
        <HomePagesBottom />
        <News />
        <Faq />
        <Footer />
      
    </div>
  )
}

export default AllPageImport
