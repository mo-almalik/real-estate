import React from 'react'
import css from './NotFound.module.css'
import error from '../../Assets/images/error.svg'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return <>
     <div className={css.NotFound + ' container h-100 text-center'}>
     <div className='d-flex justify-content-center align-items-center h-100'>
      <img src={error} alt='خطأ في الوصول' className='w-50 img-fluid w-md-100' />

     
     </div>
    <Link to={'/'}>
    <button className='btn-main'>الرجوع الي الرئيسية</button>
    </Link>
     </div>
  </>
}
