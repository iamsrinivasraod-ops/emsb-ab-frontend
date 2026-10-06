import { useState } from "react";

function EmployeeForm(){
    const [formdata,setFormdata]=useState({
        name:"",
        dept:"",
        email:"",
        password:""
    });
    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setFormdata({
            ...formdata,
            [name]:value
        });
    }
    async function hogaya(e){
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/")
        .then((response)=>{console.log(response.data)})
        .catch((error)=>{console.log(error)})
    }

    setFormdata({
        name:"",
        dept:"",
        email:"",
        password:""
    })

    return(
        <>
        <h1>Employee Registration Form</h1>
        <form onSubmit={hogaya}>
            <input
            type="text"
            name="name"
            placeholder="Name:"
            value={formdata.name}
            onChange={handleChange}/>

            <input
            type="text"
            name="dept"
            placeholder="Dept:"
            value={formdata.dept}
            onChange={handleChange}/>

            <input
            type="email"
            name="email"
            placeholder="Email:"
            value={formdata.email}
            onChange={handleChange}/>

            <input
            type="password"
            name="password"
            placeholder="Password:"
            value={formdata.value}
            onChange={handleChange}/>
            <button type="submit">Register</button>
        </form>
        </>
    );
}
export default EmployeeForm;