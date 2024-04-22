import React from 'react';

import css from './Hero.module.css';
export default function Hero() {
  return <>
     <div className={css.Hero + ' '}>
       <div className='d-flex justify-content-center align-items-start flex-column  container h-100 '>
      <h1>أحصل علي افضل  العقارات</h1>
      <p className='my-3 fs-5'>أسعار حقيقية. صور حقيقية. عقارات حقيقية</p>
      <button className={css.btnMain}>تصفح العقارات</button>
       </div>
     </div>
  </>
}
