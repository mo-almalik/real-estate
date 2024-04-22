import React from 'react'
import css from '../Realestate/Realestate.module.css'
import Skeleton from 'react-loading-skeleton'


export default function SkeletonLoding() {
  return <>
       
         
        
        <div className='card'>
        <Skeleton className={css.sliderImg + ' card-img-top'} duration={1.5}/>
           <div className='d-flex align-items-center  pt-3 w-100 m-auto'>
           <Skeleton className={css.agency } width={30} height={30} duration={1.5} />
           <h6 className='mx-3'><Skeleton /></h6>
           </div>
            <h5 className={css.title + '  text-end px-3 pt-3 w-100 m-auto'}>
            <Skeleton />
            </h5>
            <div className='card-body  w-100 ms-auto'>
            <p className={css.description}>
            <Skeleton />
            </p>
               <div className={css.data + ' w-75 d-flex  justify-content-between align-items-start'}>
                <div><Skeleton /> </div>
                <div><Skeleton /></div>
                <div><Skeleton /></div>
                <div><Skeleton /></div>
               </div>
            </div>
          </div>
       
     
     
        
  </>
}

