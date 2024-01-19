import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";
import '../Register/Register.css'
import { FormLabel } from "react-bootstrap";
import axios from "axios"; 

 function Register() {
    const[addCustomer,setAddCustomer] = useState({
        email:"",
        number:null,
        city:"",
        password:""
    });

    const handleChange = (e) => {
        setAddCustomer(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const handleClick = async (e) =>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8080/booking/newcustomer",addCustomer)
            //navigate('/')
        }catch(err){
            console.log(err);
        }

    }


    return(
        <>
        <h1>Welcome</h1>
       <Card className="card">
       <Form>
            <h3>Register</h3>
            <div className="input">
                <FormLabel>Email</FormLabel>
            <Input type="text" name="email" placeholder="Enter Email" onChange={handleChange}/>
            </div>
            <div className="input">
            <Input type="number" name="mobileNumber" placeholder="Enter Numer" onChange={handleChange}/>
            </div>
            <div className="input">
            <Input type="text" name="city" placeholder="Enter City" onChange={handleChange}/>
            </div>
            <div className="input">
            <Input type="password" name="userPassword" placeholder="Enter password" onChange={handleChange}/>
            </div>
            <div className="input">
            <Input type="password" name="confirmPassword" placeholder="Enter Confirm Password" onChange={handleChange}/>
            </div>
            <div className="input">
            <Button onClick={handleClick}>Register</Button>
            </div>
        </Form>

       </Card>
        </>
    )
    
}

export default Register;