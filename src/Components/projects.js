import React from 'react';




const Projects = ({project })=>{
    
    
    
    
    return <> 
                
            
               
               
                <div className = 'row py-5 mb-4'>
                    {
                        project.map((item)=>{
                            const {id , name , url , image , category} = item;
                            return(
                                <div className = 'col-lg-4 col-md-6 py-4' key = {id} >
                                    <div className = 'card text-center'>
                                            <img className = 'img-fluid' src = {image} alt = {name}/>
                                            <div className = 'card-body'> 
                                                <h4 className = 'card-title'> {name} </h4>
                                                <p className = 'lead'> Type : {category} </p>
                                                <button className = 'btn btn-lg'> <a href = {url}> See Details </a> </button>
                                              </div>
                                         </div>
                                 </div>
                            )
                        })
                    }
                </div>
           
     </>
}
export default Projects