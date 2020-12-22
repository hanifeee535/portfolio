import React,{useState} from 'react';
import {useGlobalContext} from '../context'
import RingkuPhoto from '../images/ringku 1.jpg'
import {FaEnvelope} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'

import CV from "../data/Cv"
const Resume = ()=>{
    const {skills} = useGlobalContext()
    const [cvItem , setCvItem] =useState (CV);
    const [value  , setValue] = useState(0);

    const { data  } = cvItem[value];
    // console.log(data)
    return <>
       <section className = 'resume py-5'>
          <div className = 'container'>
               <div className = 'row   '>
               <div className = 'col-sm-4 order-2 offset-1 pt-4 '>
                    <img className = 'cv-photo mt-3 ' src = {RingkuPhoto} alt = 'S A Hanif Ringku'/>
                  
               </div>
               <div className = 'col-sm-6 mt-4  offset-1'>
                   <h2> Md. Soyabbir Abu Hanif </h2>
                    <p> <FaMapMarkerAlt/> Mawna chowrasta <br/> Gazipur, Dhaka , Bangladesh </p>
                    <p> <FaPhoneAlt/> +880178267624 </p>
                     <p> <FaEnvelope/> hanifseceee535@gmail.com </p>
                     
               </div>
               <hr/>
               
           </div>
           <div className = 'underline-1'></div>
           <div className = 'row pt-5' >
               <div className = 'col-md-2 offset-lg-1  pt-5  btn-col '>
                   <h4>Basic</h4>
                   {
                       CV.map((item , index)=>{
                           return (
                              <ul key = {item.id}   >
                                  <li> <button className = 'btn  btn-lg ' onClick = {()=>{setValue(index)}}> {item.categary} </button></li>
                              </ul>
                           )
                       })
                   }

               </div>
               <div className = 'col-md-8 offset-md-1 offset-lg-1 cv-col1 '>
                    {
                        data.map((item)=>{
                            const {id ,institution,mainInstitution,time , name ,icon} = item;
                            return (
                                <div key = {id} className = 'row'>
                                    <div className = 'col-sm-1 offset-sm-1 '> <span className = 'cv-icons '>{icon}</span> </div>
                                   <div className = 'col-sm-9 offset-sm-1 '> 
                                     <h4> {name} </h4> 
                                    <p> year: {time} </p> 
                                    <p> {institution} </p> 
                                    <h6> {mainInstitution} </h6> 
                                    <hr/>
                                     </div>
                                     
                                 </div>
                            )
                        })
                    }
               </div>
           </div>
          </div>
       </section>
       <section className = 'pb-5' >
         <div className = 'container'>
              <div className = 'row pb-5'>
              <div className = 'col-md-2 offset-lg-1  pt-5  btn-col'>
                        <h4 className = 'pt-5 ml-3 mt=5' >Skills</h4>
              </div>
              <div className = 'col-md-8 offset-md-1 offset-lg-1 cv-col1'>
                   {
               skills.map((item)=>{
                   const {id, name , level , icon} = item;
                   return (
                       <div className = 'row py-3' key = {id} >
                           <div className = 'col-sm-1 offset-sm-1 '>
                                 <span className = 'skilicon'>{icon}</span>
                             </div>
                           <div className = 'col-sm-9 offset-sm-1'> 
                                <h5> {name} </h5>
                           
                            <div>
                                
                                <div className = 'skillBar'  > 
                                            <div className = 'skill' style = {{width:`${level}%` }} > <p style = {{fontSize:12}} > {level}% </p> </div>
                                         </div>    
                             </div>
                           </div>
                           
                       </div>
                   )
               })
           }
              </div>
          </div>
         </div>
       </section>
     </>
}
export default Resume