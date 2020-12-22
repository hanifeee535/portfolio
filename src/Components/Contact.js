import React from 'react';

import InputForms from '../Components/InputForms';
import GoogleMap from '../Components/Map'
const Contact = ()=>{
    return <>
        <section className = 'contact py-5'>
           <div className = 'container'>
                <div className = 'row'>
                <div className = 'col text-center'>
                    <h1> Contact Me </h1>
                    <p className = 'lead'> Hey there , I am available in any social media and any platform and you can also contact me personaly via phone , email or whatsapp </p>
                    <div className = 'underline-1'></div>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-lg-6'>
                    <InputForms/>
                </div>
                <div className = 'col-lg-6'>
                    <GoogleMap />
                </div>
            </div>

            
           </div>
        </section>
     </>
}
export default Contact