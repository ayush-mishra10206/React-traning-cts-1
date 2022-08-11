import React, { useEffect, useState } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export default function ImageCarousel({ content }) {

    return <Slider autoplay={500}>
        {content.map((item, index) => (
            <div
                key={index}
                style={{ background: `url('${item.image}') no-repeat center center` }}
            >
            </div>
        ))}
    </Slider>
}
