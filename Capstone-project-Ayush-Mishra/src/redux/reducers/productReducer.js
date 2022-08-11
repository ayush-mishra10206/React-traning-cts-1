import { GET_PRODUCT_DATA } from "../actionsConstant"
import React from "react";


const initialState = {
    productData: []
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DATA:
            return { ...state, productData: action.payload }
        default:
            return state;
    }
}

export default productReducer