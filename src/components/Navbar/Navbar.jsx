import React from 'react'
import css from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";
export default function Navbar() {
  return <>
     <div className={css.Navbar + ' '}>
         <nav className="navbar navbar-expand-lg bg-white navbar">
             <div className="container">
                 <Link className={css.logo + " navbar-brand"} to={'/'}> <i className="fa-solid fa-location-dot"></i> عقار</Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                         aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                         <li className="nav-item">
                         {/* className={({ isActive  })=> isActive  ? style.active + ' nav-link text-white fw-bold mx-2' : 'nav-link text-white fw-bold mx-2'} */}
                             <NavLink to={'/'} className={ ({isActive})=>isActive ? css.active + ' nav-link ' : css.navLink + " nav-link" }   >الرئيسية</NavLink>
                         </li>
                         {/* <li className="nav-item">
                             <NavLink to={'/about'} className={ ({isActive})=>isActive ? css.active + ' nav-link ' : css.navLink + " nav-link" } >من نحن</NavLink>
                         </li> */}
                         <li className="nav-item">
                             <NavLink to={'/forSale'} className={ ({isActive})=>isActive ? css.active + ' nav-link ' : css.navLink + " nav-link" } >للبيع </NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink to={'/forRent'} className={ ({isActive})=>isActive ? css.active + ' nav-link ' : css.navLink + " nav-link" } >للايجار </NavLink>
                         </li>

                         <li className="nav-item">
                             <NavLink to={'/allproperties'} className={ ({isActive})=>isActive ? css.active + ' nav-link ' : css.navLink + " nav-link" } >عرض العقارات </NavLink>
                         </li>

                     </ul>
                     <ul className='me-auto navbar-nav mb-2 mb-lg-0'>
                         <li className="nav-item">
                             <NavLink className={ ({isActive})=>isActive ? css.contactLinkActive + ' nav-link'  : css.contactLink + " nav-link" } to={'/contact'}>أتصل بنا </NavLink>
                         </li>
                     </ul>

                 </div>
             </div>
         </nav>
     </div>
  </>
}
