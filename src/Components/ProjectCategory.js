import React from 'react'
const ProjectCategory = ({category , filterItem})=>{
    return <>
     <div className = 'row pt-3'>
                   <div className = 'col text-center'>
                       
                            {
                        category.map((itemCat , index)=>{
                            
                            return (
                               <button className = 'btn   filter-btn' key = {index} onClick = {()=>filterItem(itemCat)} > {itemCat} </button>
                                
                            
                            )
                        })
                    }
                       
                   </div>
                </div>
     </>
}
export default ProjectCategory