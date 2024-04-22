import React, { useEffect, useState } from 'react'
import css from './Details.module.css'

import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import testImg from '../../Assets/images/cat.jpg';
import millify from "millify";
import Carousel from 'react-multi-carousel';
import { Helmet } from 'react-helmet';
import DetailsLoding from '../Loding/DetailsLoding'


export default function Details() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,


    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  let [isloding, setIsLoding] = useState(true)
  let [details, setDetails] = useState(null);
  let { id } = useParams();

  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/detail',
    params: {
      externalID: id,
    },
    headers: {
      'X-RapidAPI-Key': '6e18a4a4b3msh2b649b53e569ad2p174fedjsn6011aa4ed598',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  async function getDetails() {

    const response = await axios.request(options);
    let data = response.data
    setDetails(data)
    setInterval(() => {
      setIsLoding(false)
    }, 1000)
  }
  console.log(details);

  useEffect(() => {
    getDetails()
  }, []);



  let date = {

    year: "numeric",
    month: "long",
    day: "numeric",

  };
  return <>

    {isloding ? <>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'> <DetailsLoding />  </div>
          <div className='col-lg-4'> <DetailsLoding />  </div>

        </div>
      </div>

    </> : <>

      <div className={css.Details + ' container '}>

        {details ? <>  <div className='row' key={details.id} >
          <div className='col-lg-12'>
            <div className={css.flexImg + ' w-100'}>
              <Helmet>
                <title>{details.title_l1.slice(0, 20)} </title>
              </Helmet>


              {details.photos.length !== 0 ? <>
                <Carousel responsive={responsive} >
                  {details.photos.map((mg) => <>

                    <img src={mg.url} className='w-100 rounded-1' alt={details.title_l1.slice(0, 20)} />

                  </>)}
                </Carousel>
              </> :
                <img src={testImg} className='w-100 rounded-1' alt={details.title_l1.slice(0, 20)} />
              }





            </div>
          </div>
          <div className='col-sm-12 col-md-8 col-lg-8 pt-4 position-relative'>
            <div className='d-flex  justify-content-between align-items-start flex-wrap'>
              <h3>{details.title_l1.slice(0, 20)}</h3>
              <div><button className='btn-over btn'> حفظ <i className="fa-regular fa-heart mx-1"></i></button>
                <button className='btn-over btn mx-2'>مشاركة   <i className="fa-solid fa-retweet mx-1"></i></button>
              </div>
              {/* <div className={css.share}>
                                    <i className="mx-2 fa-brands fa-facebook"></i>
                                    <i className="mx-2 fa-brands fa-facebook"></i>
                                    <i className="mx-2 fa-brands fa-facebook"></i>
                                    <i className="mx-2 fa-brands fa-facebook"></i>
                                    </div> */}
            </div>
            <div className={css.data + ' mt-3 w-75 d-flex  justify-content-between align-items-start'}>
              <div><i className="fa-solid fa-bath mx-1"></i>{details.baths}</div>
              <div><i className="fa-solid fa-bed mx-1"></i>  {details.rooms} </div>
              <div><i className="fa-solid fa-money-bill mx-1"></i>{millify(details.price)}  </div>
              <div><i className="fa-solid fa-table-cells-large mx-1"></i>  {millify(details.area)} </div>
            </div>
            <div className={css.dec + ' mt-3 py-3'} >
              <p dangerouslySetInnerHTML={{ __html: details.description_l1 }}>

              </p>
            </div>
            <div className={' mt-2'}>
              <h4>معلومات عن العقار</h4>
              <div className={css.infoState + ' mt-1'}>
                <div className='row g-5'>
                  <div className='col-sm-12 col-md-12 col-lg-6'>
                    <div className='w-80'>
                      <div className={css.underLine + ' d-flex justify-content-between align-items-start ps-3'}> <h6 className={css.light}>نوع العقار</h6>  <h6>{details.category[0].nameSingular_l1}</h6></div>
                      <div className={css.underLine + ' d-flex justify-content-between align-items-start ps-3'}> <h6 className={css.light}>نوع العرض</h6>  <h6>{details.purpose === "for-rent" ? "للايجار" : "للبيع"}</h6></div>
                      <div className={css.underLine + ' d-flex justify-content-between align-items-start ps-3'}> <h6 className={css.light}> الرقم المرجعي</h6>  <h6>{details.referenceNumber}</h6></div>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-12 col-lg-6'>
                    <div className='w-80'>
                      <div className={css.underLine + ' d-flex justify-content-between align-items-start ps-3'}> <h6 className={css.light}>حالة البناء </h6>  <h6>{details.completionStatus}</h6></div>
                      <div className={css.underLine + ' d-flex justify-content-between align-items-start ps-3'}> <h6 className={css.light}> الحالة </h6>  <h6>{new Date().toLocaleString(details.createdAt, date)} </h6></div>
                      <div className={css.underLine + ' d-flex justify-content-between align-items-start ps-3'}> <h6 className={css.light}> طريقة الدفع </h6>  <h6 className='btn-over py-1 px-3'>{details.rentFrequency ? details.rentFrequency === "monthly" ? 'شهري' : 'سنوي' : <span>غير محدد</span>}</h6></div>

                    </div>
                  </div>
                </div>
                <div className={' mt-4'}>
                  <h4> وسائل الراحة</h4>

                  <div className='my-4'>
                    {details.amenities.length !== 0 ? <>

                      {details.amenities.map(amenitie => <>
                        <button className={css.mzaya}>{amenitie.text_l1}</button>
                      </>)}

                    </> : <span>لاتوجد عناصر</span>}

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4'>
            <div className={css.agenceInfo + ' card text-center'}>
              <div className='card-header p-0'>
                <img src={details.agency.logo.url} alt='s' className={css.agLogo + ' w-100'} />
                <Link className='text-decoration-none text-dark' to={`/agencies/${details.agency.id}/${details.agency.slug}`}>
                  <div className='card-body'>
                    <h6 className='my-2'>{details.agency.name_l1}  </h6>
                    {/* <div><span className='mx-1'>رقم التصريح : </span>  <span className={css.light + ' mx-2'}>{details.agency.licenses[0].authority ? details.agency.licenses[0].authority : '' }-{details.agency.licenses[0].number ? details.agency.licenses[0].number : ''}</span></div> */}
                    <div className='my-2'><span>وكيل العقار :</span> <span className='mx-2'>{details.contactName ? details.contactName : <span>{details.agency.name_l1}</span>}</span></div>

                  </div>
                </Link>
                <div className='card-footer text-center'>
                  <Link target="_blank" to={`https://wa.me/${details.phoneNumber.whatsapp}`} className={css.btnWhatsapp}><i className="fa-brands fa-whatsapp"></i></Link>

                  <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className={css.phone} >
                    <i id='icon' className="fa-solid fa-phone"></i>

                  </button>



                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className='modal-dialog modal-dialog-centered'>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel"> رقم هاتف الوكيل</h1>

                        </div>
                        <div className="modal-body">
                          <a href='tel:$ {details.phoneNumber.mobileNumbers}' dir='rtl'> {details.phoneNumber.mobileNumbers}</a>

                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        </>
          : <>
            <div><h5>لاتوجد بيانات لهذا العقار</h5></div>
          </>}
        {/* end map details */}

      </div>


    </>}






  </>
}
