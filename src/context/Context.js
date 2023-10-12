import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/reducer'
import { useLocation } from 'react-router-dom';
// import { products_url as url } from '../utils/constants'

const initialState = {
  isSidebarOpen:false,
//   products_loading:false,
//   products_error:false,
//   single_product_loading: false,
}

const ProductsContext = React.createContext()


export const ScrollToTop = ()=>{
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const openSidebar = ()=>{
     dispatch({type: 'SIDEBAR_OPEN' })
  }
  const closeSidebar = ()=>{
     dispatch({type: 'SIDEBAR_CLOSE' })
  }



//   const fetchProducts = async ()=>{
//     dispatch({type: GET_PRODUCTS_BEGIN})
//     try {
//       const response = await axios.get(url)
//       const products = response.data
//       dispatch({type:GET_PRODUCTS_SUCCESS, payload: products})
//     } catch (error) {
//        dispatch({type:GET_PRODUCTS_ERROR})
//     }
    
//   }

//   const fetchSingleProduct = async (url)=>{
//     dispatch({type: GET_SINGLE_PRODUCT_BEGIN});
//     try {
//       const response = await axios.get(url);
//        const singleProduct = response.data;
//        dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload:singleProduct})
//     } catch (error) {
//       dispatch({type:GET_SINGLE_PRODUCT_ERROR})
//     }
//   }

//   useEffect(()=>{
//      fetchProducts(url)
//   },[])

  return (
    <ProductsContext.Provider value={{...state, openSidebar, closeSidebar}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
