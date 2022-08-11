import { GET_PRODUCT_DATA } from "./actionsConstant"



export const productDataAction = (data) =>{
    return{
        type:GET_PRODUCT_DATA,
        payload:data
    }
}