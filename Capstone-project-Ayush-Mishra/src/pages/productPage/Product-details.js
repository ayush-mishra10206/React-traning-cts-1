import React, { useEffect, useState } from "react";
import { getProductData, getSpecificProductData } from "../../services";
import { useSelector, useDispatch } from 'react-redux';
import './Product-details.css';
import { useParams } from "react-router-dom";
import Reviews from "../../Components/Reviews";

export default function ProductDetails() {
    const [data, setData] = useState({})
    const params = useParams();
    const id = Number(params.id);

    useEffect(() => {
        getSpecificProduct()
    }, [])

    const getSpecificProduct = async () => {
        setData(await getSpecificProductData(id))
    }

    return (
        <div className="productDetailsOuterdiv">
            <img src={data.image} className="image" />

            <div className="leftDiv">
                <div style={{ fontSize: '30px', fontWeight: 'bold', }}>{data.title}</div>
                <div className='priceDetailOuterDiv' style={{ fontSize: 'large' }}>
                    Rs. {data.price}
                    <div className='originalPrice' >Rs. 1899</div>
                    <div style={{ color: 'orange', marginLeft: '5px' }}>(55% OFF)</div>
                </div>
                <div style={{ marginTop: '5%' }}>
                    <ul>
                        <li>Care Instructions: Machine Wash</li>
                        <li>Fit Type: Slim</li>
                        <li>Color name: Black</li>
                        <li>Material: Pure Cotton</li>
                        <li>Short Sleeves</li>
                        <li>Machine Wash</li>
                    </ul>
                </div>
                <div>
                  <Reviews prodDesc={data}/>
                </div>
            </div>
        </div>
    )
}