import { MAKE_VISIBLE,MAKE_INVISIBLE } from "../Constants/constants";

const initialState = {success:false, unsuccess:false}

const Login =(state=initialState, action)=>{
switch(action.type){
    case MAKE_VISIBLE:
        return {
            ...state, 
            success:true
        }
        case MAKE_INVISIBLE:
            return{
                ...state,
               unsuccess:true
            }
            default:
                return{
                    state
                }
}
}

export default Login;