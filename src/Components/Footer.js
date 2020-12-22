import React from 'react';
import {FaEnvelope} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BiCopyright} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Footer = ()=>{
    return <section className = 'footer'>
       <div className = 'container'>
            <div className = 'row py-5  '>
            <div className = 'col-lg-3 col-sm-6 footerCol'>
                <h4> S A Hanif Ringku </h4>
                <p> Dept. of EEE <br/> <b>Sylhet Engineering College</b> <br/> Sylhet 3100  </p>
            </div>
            <div className = 'col-lg-3 col-sm-6 footerCol'>
                <h4> Links </h4>
                <ul>
                    <li> <Link to = '/'> Home </Link> </li>
                    <li> <Link to = '/'> About </Link> </li>
                    <li> <Link to = '/'> Project </Link> </li>
                    <li> <Link to = '/'> Contact </Link> </li>
                </ul>
            </div>
            <div className = 'col-lg-3 col-sm-6 footerCol'>
                <h4> Services </h4>
                <ul>
                    <li> React js development </li>
                    <li> Front end UI design </li>
                    <li> Wordpress Development </li>
                    <li> Python Programming </li>
                </ul>
            </div>
            <div className = 'col-lg-3 col-sm-6footerCol'>
                <h4> Get in touch </h4>
                <p> <FaMapMarkerAlt/> Mawna chowrasta <br/> Gazipur, Dhaka , Bangladesh </p>
                <p> <FaPhoneAlt/> +880178267624 </p>
                <p> <FaEnvelope/> hanifseceee535@gmail.com </p>
            </div>
        </div>
        <div className = 'row py-4 text-center'>
                <div className = 'col'>
                    <p> copyright <BiCopyright/>2020 . All Rights reserved by S A Hanif Ringku    </p>
                </div>
        </div>
       </div>
    </section>
}
export default Footer