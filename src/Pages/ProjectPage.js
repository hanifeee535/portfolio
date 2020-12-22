import React,{useState} from 'react';
import projectData from '../data/ProjectData';
import Projects from '../Components/projects';
import ProjectCategory from '../Components/ProjectCategory'
const allCategories = [
    'all',...new Set(projectData.map((item)=>item.category))
];
const ProjectPage = ()=>{
    const [project , setProject] = useState(projectData);
    const [category, setCategory] = useState (allCategories);
   const filterItem = (itemCat)=>{
    if (itemCat ==='all'){
        setProject(projectData);
        return;
    } 
    const newItem = projectData.filter((item)=>item.category===itemCat) 
    setProject(newItem)
   }

    return <>
     <section className  = 'project py-5'>
         <div className = 'container'>
              <div className = 'row'>
                <div className = 'col text-center'>
                    <h1> Explore My Projects </h1>
                    <p className = 'lead'>I love what I do, check out some of my latest works</p>
                    <div className = 'underline-1'></div>
                </div>
                </div>
                <ProjectCategory category = {category} filterItem = {filterItem}/>
                

                <Projects project = {project}  />
         </div>
     </section>
    </>
}
export default ProjectPage