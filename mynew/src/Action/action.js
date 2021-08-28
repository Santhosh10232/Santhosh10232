import {MAKE_VISIBLE,MAKE_INVISIBLE} from '../Constants/constants';

export const makeVisible =()=>{
    return({
        type: MAKE_VISIBLE
    })
}

export const makeInvisible =()=>{
    return({
        type: MAKE_INVISIBLE
    })
}