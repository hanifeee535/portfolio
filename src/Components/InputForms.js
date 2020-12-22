import React , {useState } from 'react'
const InputForms = ()=>{
    const [firstName , setFirstName] = useState ('');
    const [LastName , setLastName] = useState ('');
    const [email , setEmail] = useState ('');
    const [text , setText] = useState ('');
    const [people , setPeople] = useState ([]);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const person = { id:new Date().getTime().toString(), firstName ,LastName, email , text};
        setPeople ((item)=>{
        return [...item , person]
      });
      setFirstName ('')
      setEmail('')
      setText('')
      setLastName ('')

      
      
    }
    
    return <>
     <div className = 'container '>
         <h4 className = 'py-5'> Send Me A Message </h4>
         <form className = 'form'onSubmit = {handleSubmit} >
             <div className = 'form-group'>
                 <label htmlFor = 'FirstName'> First Name </label>
                 <input 
                 className = 'form-control'
                 type = 'text' 
                 id = 'FirstName'
                 name = 'FirstName'
                 value = {firstName}
                 onChange = {(e)=>setFirstName(e.target.value)}
                 />
             </div>

              <div className = 'form-group'>
                 <label htmlFor = 'LastName'> Last Name </label>
                 <input 
                 className = 'form-control'
                 type = 'text' 
                 id = 'LastName'
                 name = 'LastName'
                 value = {LastName}
                 onChange = {(e)=>setLastName(e.target.value)}
                 />
             </div>

              <div className = 'form-group'>
                 <label htmlFor = 'Email'> Email </label>
                 <input 
                 className = 'form-control'
                 type = 'email' 
                 id = 'Email'
                 name = 'Email'
                 value = {email}
                 onChange = {(e)=>setEmail(e.target.value)}
                 />
             </div>

             <div className = 'form-group'>
                 <label htmlFor = 'Text'> Write your Message </label>
                 <textarea 
                 className = 'form-control'
                 id = 'Text'
                 rows = '10'
                 
                 name = 'Text'
                 value = {text}
                 onChange = {(e)=>setText(e.target.value)}
                 />
             </div>
             <button className = 'btn btn-lg btn-primary' type = 'submit' > Send your Message </button>
         </form>
     </div>
     </>
}
export default InputForms