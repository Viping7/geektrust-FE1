import { http } from "../services/http";
import {FIND_FALCONE_SUCCESS,FIND_FALCONE_ERROR,FIND_FALCONE_SERVER_ERROR} from './types';

export const findFalcon = (url,payload,header) => (dispatch) => {
    return http('post',url,payload,header).then(data=>{
        if(data.status == 'success'){
            dispatch({
                type: FIND_FALCONE_SUCCESS,
                data: data.planet_name
            })
        }else{
            dispatch({
                type: FIND_FALCONE_ERROR,
            })
        }
    },(err)=>{
        dispatch({
            type: FIND_FALCONE_SERVER_ERROR,
            data: data.error
        })
    }) 
}