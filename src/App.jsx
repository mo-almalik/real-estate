import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import ForRent from "./components/ForRent/ForRent";
import ForSale from "./components/ForSale/ForSale";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import PropertiesContextProvider from './components/Context/properties';
import Details from './components/Details/Details';
import Agencies from './components/Agencies/Agencies';
import AllProperties from './components/AllProperties/AllProperties';
import AllListProvider from './components/Context/Allproperties';
import NotFound from './components/NotFound/NotFound';





let routers =createBrowserRouter([
  {path:'' ,element:<Layout />,children:[
    {index:true ,element:<Home />},
      {path:'forRent' ,element:<ForRent/>},
      {path:'forSale' ,element:<ForSale/>},
      {path:'forSale' ,element:<ForSale/>},
      {path:'contact' ,element:<Contact/>},
      {path:'about' ,element:<AboutUs/>},
      {path:'details/:id' ,element:<Details />},
      {path:'agencies/:id/:slug' ,element:<Agencies />},
      {path:'allproperties' ,element:<AllProperties />},
      {path:'*' ,element:<NotFound />},


  ]}
])
export default function App() {
  return <><SkeletonTheme baseColor="	#f0f3f5" highlightColor="#a3b8c2" direction='rtl' >
 
      <PropertiesContextProvider>
         <AllListProvider>
         <RouterProvider router={routers}></RouterProvider>
         </AllListProvider>
      </PropertiesContextProvider>

  </SkeletonTheme>
  </>
}
