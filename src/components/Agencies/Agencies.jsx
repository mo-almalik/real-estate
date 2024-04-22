import React, { useContext, useEffect, useState } from 'react'
import css from './Agencies.module.css'
import testImg from '../../Assets/images/cat.jpg';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import millify from "millify";
import Skeleton from 'react-loading-skeleton';
import SkeletonLoding from '../Loding/SkeletonLoding'
import { Helmet } from 'react-helmet';

export default function Agencies() {
  let{slug}=useParams()
 let [AgenceReal , setAgenceReal] = useState(null);
 let [isloding , setIsLoding] = useState(true);
  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/agencies/get-listings',
    params: {
      agencySlug: slug,
      hitsPerPage: '25',
      page: '0',
      lang: 'ar'
    },
    headers: {
      'X-RapidAPI-Key': '6e18a4a4b3msh2b649b53e569ad2p174fedjsn6011aa4ed598',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
async function getAgneceis() {

  const response = await axios.request(options);
  let data =response.data ;
 console.log(data);
  setAgenceReal(data?.hits)
  setInterval(()=>{
    setIsLoding(false)
  } , 1000)
 

}
console.log(AgenceReal);

useEffect(() => {
  getAgneceis()
},[])
  return <>
  
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
  
<div className={css.Agencies + ' container'}>
       
       {AgenceReal.length !== 0 ? <>

       {/* agence info */}
       <div className={css.header + ' '}>
          <div className={ css.info +' row container position-relative'}>
            {AgenceReal.slice(0,1).map((info ,i)=><>
                  <Helmet>
      <title>{info.agency.name}</title>
    </Helmet>
            <div className='col-md-6 text-center' key={i}><img src={info.agency.logo.url}  className={ 'w-50 rounded-3 '} alt={info.title} /> </div>
            <div className='col-md-6 d-flex  flex-wrap justify-content-center flex-column'>
              <h6>اسم الشركة : <span className='mx-1'></span> {info.agency.name} </h6>
              <div className='mt-2'><span className='mx-1'>رقم التصريح : </span>  <span className={css.light + ' mx-2'}>{info.agency.licenses[0].authority ? info.agency.licenses[0].authority : '' }-{info.agency.licenses[0].number ? info.agency.licenses[0].number : ''}</span></div>

            </div>
            </>)}
          </div>
       </div>
       {/* agence info */}
        <div className='row gy-3 mt-5'>
        {AgenceReal.map((item ,index)=> <>
          <div key={index} className='col-lg-4'>
        <Link to={`/details/${item.id}`} className='text-decoration-none'>
        <div className='card position-relative '>
            <img src={item.coverPhoto.url} alt={item.title} className={css.sliderImg + ' card-img-top '} />
            <div className='d-flex align-items-center  pt-3 w-100 '>
           <img src={item.agency.logo.url} size="50" className={css.agency + ' w-50'} alt={item.agency.name.slice(0,20)}  />
           <h6 className='w-75'>{item.agency.name.slice(0,20)}</h6>
           </div>
            <h5 className={css.title + '  text-end px-3 pt-3 w-100 m-auto'}>
            {item.title.length > 20 ? `${item.title.substring(0, 20)}` : item.title}
            </h5>
            <div className='card-body  w-100 m-auto'>
            <p className={css.description}>
            {item.title.length > 20 ? `${item.title.substring(0,70)} ..` : item.title}
            </p>
               <div className={css.data + ' w-80 d-flex  justify-content-between align-items-start'}>
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
    
       </>: <div><h6>لاتوجد معلومات حاليا !</h6></div>}
     </div>
</>

}
    
  </>

  
}
