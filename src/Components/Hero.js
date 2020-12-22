import React from 'react';
import { Link } from 'react-router-dom'

const Hero = ()=>{
    return <>
        <section className = 'hero'>
            <div className = 'clearfix py-4 '> </div>
               <div className = 'container'>
                    <div className = 'row py-4 '>
                    <div className = '  col  text-center '>
                        <h3 className = 'mt-5  ' > Hey! this is.... </h3>
                        <h1 className = 'display-4 py-2 ' >S A Hanif Ringku</h1>
                        <h5 className = 'py-2 mb-4 ' > Web Designer || React js Developer || WordPress Developer </h5>
                        <Link className = 'btn btn-outline-light btn-lg my-5 ' to ='/' >  Get In Touch  </Link>
                        
                       
                    </div>
                   
                </div>
               </div>
        </section>
    </>
}
export default Hero