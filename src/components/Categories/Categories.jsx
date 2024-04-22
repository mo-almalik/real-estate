import React from "react";
import css from "./Categories.module.css";
import { Link } from "react-router-dom";


export default function Categories() {

  return (
    <>
      <div className={css.Categories + " container my-3"}>
          <div className="d-flex justify-content-between align-items-center my-4 mt-5 flex-wrap">
            <div>
              <h4>التصنيفات الأكثر طلبا</h4>
            </div>
            <Link to={'/allproperties'}>
            <button className="btn-main">
              تصفح العقارات <i className="fa-solid fa-arrow-left mx-2"></i>
            </button>
            </Link>
          </div>

          <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 ">
                <Link to={"/"}>
                  <div className={css.villa + " mainImge"}>
                    <div className={css.CategoriesContent}>
                      <h4>فلل للبيع </h4>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <Link to={"/"}>
                  <div className={css.CategoriesBox + " mainImge"}>
                    <div className={css.CategoriesContent}>
                      <h4>شقة للبيع</h4>
                    </div>
                  </div>
                </Link>
              </div>


              <div className="col-sm-12 col-md-6 col-lg-4">
              <Link to={"/"}>
                <div className={css.office + " mainImge"}>
                  <div className={css.CategoriesContent}>
                    <h4>مساحات عمل </h4>
                  </div>
                </div>
                </Link>
              </div>


          </div>
      </div>
    </>
  );
}
