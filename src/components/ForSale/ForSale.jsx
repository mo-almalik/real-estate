import React, { useEffect, useState } from 'react'
import css from './ForSale.module.css'
import axios from 'axios';
import millify from "millify";
import Skeleton from 'react-loading-skeleton';
import SkeletonLoding from '../Loding/SkeletonLoding';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function ForSale() {


  let [properties ,setPropertis] = useState(null);
    let [isloding , setIsLoding] = useState(true);
 let [error ,setError] =useState(null)
  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
      locationExternalIDs: '5002,6020',
      purpose: 'for-sale',
      hitsPerPage: '25',
      page: '0',
      lang: 'ar',
      sort: 'city-level-score',
      categoryExternalID: '4'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RapidAPI_Key,
          'X-RapidAPI-Host': process.env.RapidAPI_Host
    }
  };
  async function getForSale(){
    let response = await axios.request(options).catch((response)=>response).catch((error)=>error);
    let data =response.data ;
    setPropertis(data?.hits);
    setInterval(()=>{
      setIsLoding(false)
    } , 500)
    
    
  }
console.log(properties);
  useEffect(()=>{
    getForSale()
  },[])
  return <>
   <Helmet>
    <title>عقارات للبيع</title>
  </Helmet>
     <div className={css.ForSale + ' '}>
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
<div className={css.ForSale + ' container my-5'}>
     <h4 className='mb-3'> عقارات للبيع</h4>
    
       {properties  ? <>
        <div className='row gy-3'>
      
        {properties.map((item ,index)=> <>
      
          <div key={item.id} className='col-lg-4 p-0'>
        <Link to={`/details/${item.id}`} className='text-decoration-none'>
        <div className='card position-relative p-0 mx-2' >
            <img src={item.coverPhoto.url } alt={item.title} className={css.sliderImg + ' card-img-top'} />
           <div className='d-flex align-items-center  pt-3 w-100 m-auto'>
           <img src={item.agency.logo.url} size="50" className={css.agency } alt={item.agency.name.slice(0,20)} />
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

       </>: <div><h5>هنالك خطأ في الخادم الرجاء المحاولة لاحقا</h5></div>}
       
     </div>
</>
}

        </div>
     </div>
  </>
}
