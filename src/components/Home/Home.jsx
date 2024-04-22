import React from 'react'
import css from './Home.module.css'
import { Helmet } from 'react-helmet'
import Hero from '../Hero/Hero'
import Listings from '../Listings/Listings'
import Categories from '../Categories/Categories'
import Realestate from '../Realestate/Realestate'
export default function Home() {
  return <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>الرئيسية</title>
  </Helmet>
     <div className={css.Home + ' '}>
       <Hero />

<Listings />
       
       <Categories />

       <div className='my-4'>
        <Realestate />
       </div>
     </div>
  </>
}
