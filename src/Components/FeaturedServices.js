import React from 'react';
import {useGlobalContext} from '../context'

const Featured = ()=>{
    const {services } =  useGlobalContext();
    
    return <>
       <section className = 'Service'>
           <div className = 'clearfix py-4'></div>
          <div className = 'container'>
              <div className = 'row pb-4'>
                 <div className = 'col text-center'>
                      <h1> My Services </h1>
                      <p> I am offering you different services of web designing & developing and Electrical & Electronic Engineering  </p>
                 </div>
              </div>
               <div className = 'row pb-4'>
               {
                   services.map((item)=>{
                       const {id,  image , title , subtitle, des} = item;
                       return (
                           <div className = 'col-lg-4 text-center my-3' key = {id} > 
                                <div className = 'card'>
                                    <div className = 'card-image-service' > {image} </div>
                                    <div className = 'card-body'>
                                        <h3 className = 'card-title py-2'> {title} </h3>
                                        <h5 className = 'card-subtitle py-2'>  {subtitle} </h5>
                                          
                                    </div>
                                    <div  className = 'card-footer'>
                                            <button className= 'btn btn-info'> See More </button>
                                         </div>
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
export default Featured