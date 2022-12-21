import { useEffect, useState } from "react";
import style from './ranger.module.css'
const Ranger=(props)=>{
    const [color,setColor]=useState('');
    const randomColor = (() => {
        "use strict";

        const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        return () => {
        var h = randomInt(0, 360);
        var s = randomInt(42, 98);
        var l = randomInt(40, 90);
        return `hsl(${h},${s}%,${l}%)`;
        };
    })();
    useEffect(()=>{
        setColor(randomColor());
    },[])
    return(
        <input
            type="range"
            min="0"
            max="10"
            value={props.val}
            id="slider-1"
            className={`w-75 mx-3 col-12 ${style.input}`}
            style={{
            '--SliderColor':color,
            backgroundImage: `linear-gradient(to right, 
            ${color} ${props.val*10}%,
            #F2F3F7 ${props.val*10}%`
            }}
        />
    )
}

export default Ranger;