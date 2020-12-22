import React from 'react';
import Hero from "../Components/Hero";
import ShortIntro from "../Components/ShortIntro";
import Featured from '../Components/FeaturedServices';
import Progress from "../Components/Progressbars"
import Slider from '../Components/Slider';
const HomePage = ()=>{
    return <>
        <Hero/>
        <ShortIntro/>
        <Featured/>
        <Slider/>
        <Progress/>
        

    </>
}
export default HomePage