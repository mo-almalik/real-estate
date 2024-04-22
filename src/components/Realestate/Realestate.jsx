import React, { useContext, useEffect, useState } from 'react';
import css from './Realestate.module.css';
import { PropertiesContext } from '../Context/properties';
import millify from "millify";
import { Link } from 'react-router-dom';

import SkeletonLoding from '../Loding/SkeletonLoding';


export default function Realestate() {
  let {getPropertis} =useContext(PropertiesContext);
let [properties ,setPropertis] =useState(null);
let [isloding , setIsLoding] = useState(true)

async function Lists(){
let {data}= await getPropertis();
setPropertis(data?.hits);
setIsLoding(false)

}

useEffect(()=>{
  Lists();
},[]);


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
<div className={css.Realestate + ' container my-5'}>
     <h4 className='mb-3'> العقارات</h4>
      

       {properties  ? <>
        <div className='row'>
      
        {properties.slice(0,9).map((item)=> <>
       
          <div  key={item.id} className='col-sm-12 col-md-6 col-lg-4 p-0'>
        <Link to={`/details/${item.id}`} className='text-decoration-none'>
        <div className='card position-relative p-0 mx-3' >
         {item.coverPhoto.url ?  <img src={item.coverPhoto.url } alt={item.title} className={css.sliderImg + ' card-img-top'} />: 'none'}

     
           
           <div className='d-flex align-items-center  pt-3 w-100 m-auto'>
           <img src={item.agency.logo.url} size="50" className={css.agency } alt={item.agency.name.slice(0,20)}  />
           <h6 className='mx-3'>{item.agency.name.slice(0,20)}</h6>
           </div>
            <h5 className={css.title + '  text-end px-3 pt-3 w-100 m-auto'}>
            {item.title.length > 20 ? `${item.title.split(" ").slice(0,5).join(' ')} ` : item.title}
            </h5>
            <div className='card-body  w-100 m-auto'>
            <p className={css.description}>
            {item.title.length > 20 ? `${item.title.substring(0,100)}` : item.title}
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
     <div className='text-center my-5'>
     <Link to={'/allproperties'}>
     <button className='btn-main w-25 m-auto'>عرض 25 </button>
     </Link>
     </div>
       </>: ''}
     
       
     </div>
</>
}

  </>
}
