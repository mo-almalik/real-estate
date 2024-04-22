import React, { useEffect, useState } from 'react'
import css from './ForRent.module.css'
import axios from 'axios';
import millify from "millify";
import Skeleton from 'react-loading-skeleton';
import SkeletonLoding from '../Loding/SkeletonLoding';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function ForRent() {


  let [properties ,setPropertis] = useState(null);
    let [isloding , setIsLoding] = useState(true);

  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
      locationExternalIDs: '5002,6020',
      purpose: 'for-rent',
      hitsPerPage: '25',
      page: '0',
      lang: 'ar',
      sort: 'city-level-score',
      rentFrequency: '',
      categoryExternalID: '4'
    },
    headers: {
      'X-RapidAPI-Key': '6e18a4a4b3msh2b649b53e569ad2p174fedjsn6011aa4ed598',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  async function getForRent(){
    let response = await axios.request(options);
    let data =response.data ;
    setPropertis(data?.hits);
    setInterval(()=>{
      setIsLoding(false)
    } , 1000)
    
    
  }

  useEffect(()=>{
    getForRent()
  },[])
  return <>
  <Helmet>
    <title>عقارات للايجار</title>
  </Helmet>
     <div className={css.ForRent + ' '}>
        <div className='container'>
          
{isloding ?  <>

<div className='container'>
<div className='row'>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>
 </div>
</div>

</>  : <>
<div className={css.Realestate + ' container my-5'}>
     <h4 className='mb-3'> عقارات للايجار</h4>
      
      
       {properties  ? <>
        <div className='row gy-3'>
      
        {properties.map((item)=> <>
      
          <div key={item.id} className='col-lg-4 p-0'>
        <Link to={`/details/${item.id}`} className='text-decoration-none'>
        <div className='card position-relative p-0 mx-2' >
            <img src={item.coverPhoto.url } alt={item.title} className={css.sliderImg + ' card-img-top'} />
           <div className='d-flex align-items-center  pt-3 w-100 m-auto'>
           <img loading='true' src={item.agency.logo.url} size="50" className={css.agency } alt={item.agency.name.slice(0,20)} />
           <h6 className='mx-3'>{item.agency.name.slice(0,20)}</h6>
           </div>
            <h5 className={css.title + '  text-end px-3 pt-3 w-100 m-auto'}>
            {item.title.length > 20 ? `${item.title.substring(0, 20)}` : item.title}
            </h5>
            <div className='card-body  w-100 m-auto'>
            <p className={css.description}>
            {item.title.length > 20 ? `${item.title.substring(0,50)} ...` : item.title}
            </p>
               <div className={css.data + ' w-75 d-flex  justify-content-between align-items-start'}>
                <div><i className="fa-solid fa-bath mx-1"></i> {item.baths}</div>
                <div><i className="fa-solid fa-bed mx-1"></i>  {item.rooms}  </div>
                <div><i className="fa-solid fa-money-bill mx-1"></i>{millify(item.price)}  </div>
                <div><i className="fa-solid fa-table-cells-large mx-1"></i>  {millify(item.area)} </div>
               </div>
            </div>
          </div>
        </Link>
        </div>

        </>
        )}
      
        </div>

       </>: ''}
       
     </div>
</>
}

        </div>
     </div>
  </>
}
