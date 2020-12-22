import React , {useState,useEffect} from 'react';
import {BsChevronLeft} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs'
import {market} from "../data/marketPlace"

const Slider = ()=>{
    const [index, setIndex] = useState(0);
    const [people , setPeople] = useState (market)
    useEffect (()=>{
        const lastIndex = people.length-1;
        if (index > lastIndex){
            setIndex (0);
        }
        if(index<0){
            setIndex (lastIndex)
        }
    } , [index , people])

    useEffect(()=>{
       let slide =  setInterval(()=>{
            setIndex(index+1)
        } , 3000);
        return ()=>{
            clearInterval(slide)
        }
    } , [index])
    return <>
        <section className = 'slider my-5'>
           <div className = 'container'>
               <div className = 'row pt-5'>
                   <div className = 'col text-center'>
                        <h3> Available for freelancing </h3>
                        <p  className='lead' > I work as a freelancer in different freelancing marketplace. You can hire me from there </p>
                   </div>
               </div>
               <div className = 'row pt-4' >
                   <div className = 'col text-center '>
                        {
                     people.map((item,itemIndex)=>{
                        const {id ,name , icon ,des ,link } = item;

                        let position = 'nextSlide';
                        if (itemIndex ===index){
                            position = 'activeSlide';
                        }
                        if (itemIndex === index-1 || (index=== 0 && itemIndex === people.length-1 ) ){
                            position = 'lastSlide'
                        }
                        return (
                            
                                <article className = {position} key = {id} >
                                <h1> {name} </h1>
                                <div className= 'slider-icon' > {icon} </div>
                                <p className = 'lead' > {des} </p>
                                <button className = 'btn btn-lg btn-outline-info'> <a href = {link} className = 'sliderbtn' target='blank' > See Profile </a> </button>
                               
                            </article>
                           
                          
                        )
                     })
                    }
                     <button className = 'prev' onClick = {()=>setIndex(index-1)} > <BsChevronLeft/> </button>
                     <button className = 'next' onClick = {()=>setIndex(index+1)} > <BsChevronRight/> </button>
                    
                   </div>
                 </div>
           </div>

        </section>
     </>
}
export default Slider