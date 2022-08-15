import React from 'react'
import {useSelector} from "react-redux";
import {Navigate,useLocation} from "react-router-dom";
//1.Check if the user is autenticated or not
//2. If yes, redirecting/navigate to the page/component that he/she was tying to access
//3. else navigate login page
//using Higher Order Components
const ReqAuth = ({children}) => {
    const location =useLocation();

    const auth = useSelector((store)=>store.AuthReducer.isAuth)
     if(!auth){
        //login page
        return <Navigate to ='/login' state={{from:location}} replace />
     }

  return children
    
  
}

export default ReqAuth