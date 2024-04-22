import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import css from './Listings.module.css';
import { PropertiesContext } from '../Context/properties';
import millify from "millify";
import img from '../../Assets/images/Hero.jpeg'
import { Link } from 'react-router-dom';
import SkeletonLoding from '../Loding/SkeletonLoding';


export default function Listings() {

let {getPropertis} =useContext(PropertiesContext);
let [properties ,setPropertis] =useState(null);
let [isloding , setIsLoding] = useState(true)

async function PropList(){
let {data}= await getPropertis();
setPropertis(data?.hits);
setIsLoding(false)

}



useEffect(()=>{
  PropList();
},[]);


// slider setting

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,


  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return <>
  {/* {properties?.map(item => <h4 key={item.id}><img src={item.coverPhoto.url} alt='d' /></h4> )} */}
     <div className={css.Listings + ' container my-5'}>
     <h4>أضيف حديثا</h4>
     {isloding ?  <>

<div className='container'>
<div className='row'>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>
<div className='col-lg-4'> <SkeletonLoding />  </div>


 </div>
</div>

</>  :  <>

<div className='row'>
       {properties ? <>
        <Carousel responsive={responsive} autoPlaySpeed={1500}  autoPlay={true}>
        {properties.slice(10,16).map((item)=> <>
          <div key={item.id} className='col text-end mx-3'>
          <Link to={`/details/${item.id}`} className='text-decoration-none'>
          <div className='card position-relative '>
            <img src={item.coverPhoto.url} alt={item.title} className={css.sliderImg + ' card-img-top m-2'} />
            <h5 className={css.title + '  text-end px-3 pt-3 w-90 m-auto'}>
            {item.title.length > 20 ? `${item.title.substring(0, 20)}` : item.title}
            </h5>
            <div className='card-body  w-90 m-auto'>
            <p className={css.description}>
            {item.title.length > 20 ? `${item.title.substring(0,100)}` : item.title}

            </p>
               <div className={css.data + ' d-flex  justify-content-around align-items-start'}>
               <div>    <i className="fa-solid fa-bath"></i> {item.baths}</div>
          
            <div>      <i className="fa-solid fa-bed"></i>  {item.rooms}  </div>
          
            <div>     <i className="fa-solid fa-money-bill"></i>{millify(item.price)} </div>
          
            <div>     <i className="fa-solid fa-table-cells-large"></i>  {millify(item.area)} </div>
               </div>
            </div>
          </div>
          </Link>
        </div>

        </>
        )}
        </Carousel>
       </>: ''}
      </div>
</>}
      
     </div>
  </>
}




