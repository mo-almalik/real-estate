import React from 'react'
import css from '../Realestate/Realestate.module.css'
import Skeleton from 'react-loading-skeleton'

export default function DetailsLoding() {
  return <>
       <div className='row'  >
                            <div className='col-lg-12'>

                                                <Skeleton className={css.flexImg + ' w-100'} height={300}/>

                          </div>
                          <div className='col-sm-12 col-md-8 col-lg-8 pt-4 position-relative'>
                              <div className='d-flex  justify-content-between align-items-start'>
                                  <h3> <Skeleton/></h3>
                                  
                                </div>
                               
                              </div>
                              <div >
                              <Skeleton className={css.data + ' mt-3 w-75 d-flex  justify-content-between align-items-start'}/>
                              </div>
                              <div >
                              <Skeleton className={css.dec + ' mt-3 py-3'}/>
                              </div>
                              <div className={' mt-2'}>
                                  <h4>معلومات عن العقار</h4>
                                  <div className='row g-5'>
                                  <Skeleton/>
                                          </div>
                               
                              </div>
                          </div>
                          <div className='col-sm-12 col-md-4 col-lg-4'>
                          <Skeleton/>
                          </div>
                   
                       
 </>
}
