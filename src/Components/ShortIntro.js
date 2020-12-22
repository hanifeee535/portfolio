import React from 'react';
import RingkuPhoto from '../images/ringku 1.jpg'
import { Link } from 'react-router-dom';
import {FaEnvelope} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const ShortIntro = ()=>{
    return (
        <>
            <section className = 'shortIntro'>
                <div className = 'container'>
                    <div className ='row py-4 '> 
                       <div className = 'col text-center'>  <h1  > At A Glance </h1> </div>
                        </div>
                    <div className = 'row mt-4 '>
                        <div  className = 'col-lg-6 text-center  py-4 '>
                             <img className = 'introImage' src = {RingkuPhoto} alt = 'S A Hanif'/>
                        </div>
                        <div className = 'col-lg-6 py-4  short-intro-comumn '>
                            <h3> Md. Soyabbir Abu Hanif (Ringku) </h3>
                            <p className = 'lead'> Front end developer ||React js developer || WordPress developer </p>
                            <p className = 'lead'> <span> <FaEnvelope/> hanifseceee535@gmail.com </span>  </p>
                            <p className = 'lead'> <span> <FaPhoneAlt/> +8801782257624 </span>  </p>
                            <p className = 'lead'> <span> <FaWhatsappSquare/> +8801838203192</span>  </p>
                            <p className = 'lead'> <span> <FaMapMarkerAlt/> Gazipur, Dhaka , Bangladesh</span>  </p>
                            <ul className  = 'nav'>
                                <li className = 'nav-item social-icon '>
                                    <a href = 'https://www.facebook.com/sahanif.ringku/'  target='blank' className = 'text-info nav-link' > <FaFacebook/> </a>
                                </li>
                                <li className = 'nav-item social-icon'>
                                    <a href = 'https://www.instagram.com/sa_hanif_ringku/?hl=en' target='blank'  className = 'text-info nav-link' > <FaInstagram/> </a>
                                </li>
                                <li className = 'nav-item social-icon '>
                                    <a href = 'https://twitter.com/a_ringku' target='blank' className = 'text-info nav-link' > <FaTwitter/> </a>
                                </li>
                                <li className = 'nav-item social-icon'>
                                    <a href = 'https://www.linkedin.com/in/soyabbir-abu-hanif-85518018a/'  target='blank' className = 'text-info nav-link' > <FaLinkedinIn/> </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
            </section>
        </>
    )
}
export default ShortIntro