import React from 'react'
import css from './Footer.module.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return <>
     <div className={css.Footer + ' mt-5'}>
        <div className='container'>
          <div className='row'>
            <div className="col-sm-6 col-md-6 col-lg-4 my-2">
              <h2>عقار</h2>
              <p>
                موقع تجريبي مبني علي api جاهزة
              </p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 my-2">
              <h4 className='mb-3'>روابط </h4>
              <ul>
              <li className='nav-item'>   <Link to={'/'} className={css.footerLink + ' text-decoration-none nav-link mb-3 '}>الرئيسية</Link></li>
               <li className='nav-item'> <Link to={'/forSale'} className={css.footerLink + ' text-decoration-none nav-link mb-3'}>شقق للبيع</Link></li>
               <li className='nav-item'> <Link to={'/forRent'} className={css.footerLink + ' text-decoration-none nav-link mb-3'}>شقق للايجار</Link></li>
               <li className='nav-item'> <Link to={'/allproperties'} className={css.footerLink + ' text-decoration-none nav-link mb-3'}>عرض العقارات</Link></li>
               <li className='nav-item'> <Link to={'/contact'} className={css.footerLink + ' text-decoration-none nav-link mb-3'}>اتصل بنا</Link></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 my-2">
            <h4 className='mb-3'>تابعنا </h4>
            <p>
              تابعنا علي منصات التواصل الاجتماعي
            </p>
              <div className='d-flex justify-content-start align-items-center pt-2'>
                <i className='fa fa-brands fa-facebook mx-3'></i>
                <i className='fa fa-brands  fa-twitter mx-3'></i>
                <i className='fa fa-brands  fa-tiktok mx-3'></i>
                <i className='fa fa-brands  fa-youtube mx-3'></i>
              </div>
            </div>
          </div>
        </div>
     </div>
  </>
}
