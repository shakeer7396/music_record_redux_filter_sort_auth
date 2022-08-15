 import * as types from './actionType';

 const initialState={
    isAuth:false,
    token:'',
    isLoading:false,
    isError:false
 }

 const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return{
                ...oldState,
                isLoading:true,
                isError:false,

            }
            case types.USER_LOGIN_SUCCESS:
            return{
                ...oldState,
                isAuth:true,
                token:payload,
                isLoading:false,
                isError:false,

            }
            case types.USER_LOGIN_FAILURE:
            return{
                ...oldState,
                isLoading:false,
                isError:true,
                isAuth:false,
                token:''

            }
            



        default:
            return oldState;
    }

 }

 export {reducer};