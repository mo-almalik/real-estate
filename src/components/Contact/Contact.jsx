import React from 'react'
import css from './Contact.module.css'


export default function Contact() {





  return <>
     <div className={css.Contact + ' '}>
     <div className={css.contactHeader + ' mb-5'}>
       <h3 className='fw-bold text-white'>تواصل معنا    </h3>
       <p className='text-white mt-3'>فريق الدعم الفني جاهز للرد علي اي اسؤال او اذا كانت لك اي شكوي</p>
       <div className={css.contactinfo}>
        <button className='btn-main mx-3 px-5 shadow'><i className='fa fa-phone-alt'></i></button>
        <button className='btn-main mx-3 px-5 shadow'><i className='fa fa-location-dot'></i></button>
       </div>
     </div>

     <div className=' w-75 m-auto'>
      <form>
        <input type='text' placeholder='الأسم' className='form-control p-2 mt-2' />
        <input type='email' placeholder='البريد الالكتروني' className='form-control p-2 mt-2' />
        <input type='tel' placeholder='رقم الهاتف ' className='form-control p-2 mt-2' />
        <input type='text' placeholder='عنوان الرسالة  ' className='form-control p-2 mt-2' />
        <textarea rows={8} placeholder='نص الرسالة' className='form-control p-2 mt-2'></textarea>
        <button className='btn-main  m-auto text-center my-2'>أرسل <i className="fa-regular fa-paper-plane mx-2"></i></button>
      </form>
     </div>
     
      <div className='container'>
      
      </div>
     </div>
  </>
}
