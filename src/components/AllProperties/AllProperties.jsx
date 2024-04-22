import React, { useContext, useEffect, useState } from 'react';
import css from './AllProperties.module.css';
import millify from "millify";
import { Link } from 'react-router-dom';
import SkeletonLoding from '../Loding/SkeletonLoding';
import { Helmet } from 'react-helmet';
import { AllListContext } from '../Context/Allproperties';



export default function AllProperties() {
  let {getAll ,getYearly} = useContext(AllListContext)

let [allproperties ,setAllPropertis] =useState(null);
let [isloding , setIsLoding] = useState(true)

async function AllProperties(){
  let {data}  =await getAll();
  setAllPropertis(data?.hits)
  setIsLoding(false)
}

async function yearly() {
  setIsLoding(true) 
  let {data} =await getYearly();
  setAllPropertis(data?.hits)
  setIsLoding(false)
 }

 const  YearOrMonth =()=>{  document.getElementById("YearOrMonth").classList.toggle("d-none")}
 const  Rooms =()=>{  document.getElementById("Rooms").classList.toggle("d-none") }
 const RealType =() =>{document.getElementById("RealType").classList.toggle("d-none")}
 const Prices =() =>{document.getElementById("Prices").classList.toggle("d-none")}
useEffect(()=>{
  AllProperties();
},[]);



  return <>
<Helmet>
  <title>جميع العقارات</title>
</Helmet>

    <div className={css.header}>
      <div className='d-flex justify-content-center align-items-center flex-column  container h-100 '>
        <h3>كل البيوت تحت سقفٍ واحد </h3>
        
       
         
           
            <div className={css.functional + ' main-border bg-white d-flex justify-content-between align-items-center p-3 w-100 mt-3'}>
             <div className={css.flexMobile + ' d-flex position-relative w-25 justify-content-center'}>
             <button onClick={YearOrMonth} className={css.btnMain + ' mx-2 '}  > نوع العرض   <i className="fa-solid fa-angle-down me-2"></i> </button>
                <div className={css.postion + ' d-none d-flex text-center w-50'} id='YearOrMonth'>
                <ul className="navbar-nav m-auto mb-2 bg-white mt-2">
                  <li className={css.selectOption}  onClick={() => yearly()} >سنة</li>
                  <li className={css.selectOption} onClick={() => AllProperties()} >شهر</li>
                  {/* <li className={css.selectOption} onClick={() => yearly()} >اسبوع</li>
                  <li className={css.selectOption} onClick={() => yearly()} >يوم</li> */}
                </ul>
              
                </div>
             </div>

          <div className={css.flexMobile + ' d-flex position-relative w-25 justify-content-center'}>
               <button  className={css.btnMain + ' mx-2 '} onClick={RealType}>نوع العقار</button>
               <div className={css.postion + ' d-none d-flex w-100 m-auto'} id='RealType'>
                
                <div>
                  <ul className="navbar-nav m-auto mb-2 bg-white mt-2">
                    <li className={css.selectOption + ' w-100'}  >شقة</li>
                    <li className={css.selectOption + ' w-100'}  >تاون هاوس</li>
                    <li className={css.selectOption + ' w-100'} >ارض سكنية</li>
                  </ul>
                  </div>
                  <div>
                  <ul className="navbar-nav m-auto mb-2 bg-white mt-2">
                    <li className={css.selectOption + ' w-100'}  >مبنى سكني</li>
                    <li className={css.selectOption + ' w-100'}  >فیلا</li>
                    <li className={css.selectOption + ' w-100'} >بنتهاوس</li>
                    <li className={css.selectOption + ' w-100'} >شقة فندقية</li>
                  </ul>
                  </div>
               </div>
         
          </div>

           <div className={css.flexMobile + ' d-flex position-relative w-25 justify-content-center'}>
               <button  className={css.btnMain + ' mx-2 '} onClick={Rooms}>عدد الغرف & الحمامات  </button>
               <div className={css.postion + ' d-none d-flex'} id='Rooms'>
                
               <div>
                <div className=" m-auto mb-2 bg-white mt-2 d-flex h-100 ">
                
                  <ul>
                  <span  className='mx-2 p-1 '>الغرف</span>
                  <li className={css.selectOption + ' m-1'}  >1</li>
                  <li className={css.selectOption + ' m-1'}  >2 </li>
                  <li className={css.selectOption + ' m-1'} >3</li>
                  <li className={css.selectOption + ' m-1'} >4 </li>
                  </ul>
                  <ul>
                  <span  className='mx-2 p-1 '>الحمامات</span>
                  <li className={css.selectOption + ' m-1'}  >1</li>
                  <li className={css.selectOption + ' m-1'}  >2 </li>
                  <li className={css.selectOption + ' m-1'} >3</li>
                  <li className={css.selectOption + ' m-1'} >4 </li>
                  </ul>
                </div>
                </div>
                <div>
                
                </div>
               </div>
         
          </div>

          <div className={css.flexMobile + ' d-flex position-relative w-25 justify-content-center'}>
               <button  className={css.btnMain + ' mx-2 '} onClick={Prices}> السعر (درهم) </button>
               <div className={css.postion + ' d-none d-flex'} id='Prices'>
                
               <div>
                <div className=" m-auto mb-2 bg-white mt-2 d-flex h-100 ">
                
                  <ul>
                  <span  className='mx-2 p-1 '>الغرف</span>
                  <li className={css.selectOption + ' m-1'}  >1</li>
                  <li className={css.selectOption + ' m-1'}  >2 </li>
                  <li className={css.selectOption + ' m-1'} >3</li>
                  <li className={css.selectOption + ' m-1'} >4 </li>
                  </ul>
                  <ul>
                  <span  className='mx-2 p-1 '>الحمامات</span>
                  <li className={css.selectOption + ' m-1'}  >1</li>
                  <li className={css.selectOption + ' m-1'}  >2 </li>
                  <li className={css.selectOption + ' m-1'} >3</li>
                  <li className={css.selectOption + ' m-1'} >4 </li>
                  </ul>
                </div>
                </div>
                <div>
                
                </div>
               </div>
         
          </div>
          <div className={css.flexMobile + ' d-flex position-relative w-25 justify-content-center'}>
               <button  className={css.btnMains + ' mx-2 '} > بحث </button>
              
         
          </div>

            </div>
         
          
      

      </div>

    </div>

<div className="container my-4">
<h4 className='mb-3'> العقارات</h4>
</div>




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
<div className={css.AllProperties + ' container my-5 '}>
     


       {allproperties  ? <>
        <div className='row'>
      
        {allproperties.map((item ,index)=> <>
       
          <div  key={index} className='col-sm-12 col-md-6 col-lg-4 my-3'>
        <Link to={`/details/${item.id}`} className='text-decoration-none'>
        <div className='card position-relative p-0' >
         {item.coverPhoto.url ?  <img src={item.coverPhoto.url } alt={item.title} className={css.sliderImg + ' card-img-top'} />: 'none'}

            <div className={css.rentFrequency}>
              {item.rentFrequency ==="monthly" ? 'شهري' : 'سنوي' }
            </div>
           
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
     
       </>: ''}
     
       
     </div>
</>
}

  </>
}
