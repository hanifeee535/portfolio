import React from 'react';
import {useGlobalContext} from '../context'
const Progress = ()=>{
    const {skills} = useGlobalContext()
    return <>
        <section className = 'progressBar mt-5 ' > 
           <div className = 'container'>
               <div className = 'row'> 
                    <div className = 'col text-center'>
                        <h1> My Skills </h1>
                    </div>
                </div>
                <div className = 'row pb-5'>
                   {
                       skills.map((item)=>{
                           const {id, name , level , icon} = item;
                           
                           return (
                               <div  className = 'col-lg-3 col-md-6 py-4 text-center' key = {id}>
                                        <div > <span className = 'skilicon'>{icon}</span> </div>
                                        <h5> {name} </h5>
                                        <div className = 'skillBar'  > 
                                            <div className = 'skill' style = {{width:`${level}%` }} > <p style = {{fontSize:12}} > {level}% </p> </div>
                                         </div>
                                    </div>
                           )
                       })
                   }
                </div>
           </div>
         </section>
     </>
}
export default Progress