
import React, { useEffect, useState } from "react";
import { getProductData } from "../../services";
import { useSelector, useDispatch } from 'react-redux';
import { store } from "../../redux/store";
import TabProducts from "../../Components/tabProducts/TabProducts";
import './Product.css';

export default function Product({type}){
    const productData = useSelector((state) => state.productReducer.productData)
    const [ctgryType, setCtgryType] = useState(type);
    useEffect(()=>{
        getProductData()
        setCtgryType(type ? type : "All")
    },[ctgryType, type])

    return(
        <div className="productOuterdiv">
            <div className="cardDiv">
            {
                productData.filter((item) => ctgryType === "All" || item.type === ctgryType)
                .map((product)=>{
                    return <TabProducts data={product}/>
                })
            }
            </div>
            
        </div>
    )
}