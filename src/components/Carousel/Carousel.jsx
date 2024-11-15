import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import React from 'react'

const Carousel = (props) => {
  
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === props.slides.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? props.slides.length - 1 : slide - 1);
    };

    return (
    <div className="relative flex justify-center items-center w-[80%] h-96">
        <FaArrowLeft className="absolute w-8 h-8 text-[var(--green2)] cursor-pointer rounded-full left-4" onClick={prevSlide}/>
        {props.slides.map((item, index) => (
            <img 
            src={item.src} 
            alt={item.alt} 
            key={index}
            className={slide === index? "rounded-lg border border-[var(--gray2)] w-full h-full" : "rounded-lg border border-[var(--gray2)] w-full h-full hidden"}
            />
        ))}
        <FaArrowRight className="absolute w-8 h-8 text-[var(--green2)] cursor-pointer rounded-full right-4" onClick={nextSlide}/>
        <span className="flex absolute bottom-4">
            {props.slides.map((_, index) => (
                <button 
                    key={index}
                    onClick={() => setSlide(index)}
                    className={slide === index ? "bg-[var(--blue2)] h-2 w-2 rounded-full border-none outline-none my-0 mx-1" :
                                                 "bg-[var(--yellow1)] h-2 w-2 rounded-full border-none outline-none my-0 mx-1 "}
                />
            ))}
        </span>
    </div>
  )
}

export default Carousel