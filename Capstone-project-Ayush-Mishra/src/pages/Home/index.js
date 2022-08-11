
import React, { useEffect } from "react";
import ImageCarousel from "../../Components/carousel";
import FilterMenu from "../../Components/FilterMenu";
import { getProductData } from "../../services";
import './index.css';

export default function Home(){
    const content = [
        {
            image: 'assets/home-image-1.jpeg',
        },
        {
            image: 'assets/home-image-2.webp',
        },
        {
            image:'assets/home-image-5.jpg',
        },
    ];
    return(
        <div className="homeOuterDiv">
            <ImageCarousel content={content}/>
            <div className="title">
                Welome To Spark Clothing Shop
            </div>
            <FilterMenu />
        </div>
    )
}