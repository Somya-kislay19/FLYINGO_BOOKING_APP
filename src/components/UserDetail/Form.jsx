import { useState } from 'react';
import './Form.css';

function Form(){

    const [form,setForm]=useState({});
    const handleForm=(e)=>{
setForm({
    ...form,
    [e.target.name] : e.target.value
})

    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
       const response=await fetch('http://localhost:8080/demo',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.text();
        console.log(data);
    }
    return(
<div>
    <form onSubmit={handleSubmit}>
         <span>NAME</span>
        <input type="text" name="username" onChange={handleForm}/>  
        <span>email-ID</span>
 <input type="text" name="mail"  onChange={handleForm}/>   
 <span>PASSWORD</span>

        <input type="text"name="pwd" onChange={handleForm}/>
        <input type="submit"/>

    </form>
</div>

    )

}
export default Form;