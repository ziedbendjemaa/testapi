import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from "./actionType";


const init ={
    loading:false,
    errors:null,
    users:[],
};

const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case GET_DATA:
            
return{
    ...state,loading:true
};
case GET_DATA_SUCCESS:
    return{
        ...state,loading:false,users:payload,
    };
    case GET_DATA_FAIL:
        return{
            ...state,loading:false,errors:payload,
        }
        default:
        return state
    }
};

export default reducer;