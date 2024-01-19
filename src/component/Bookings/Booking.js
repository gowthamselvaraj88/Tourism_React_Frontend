import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";
import '../Bookings/Booking.css'
import { FormLabel } from "react-bootstrap";
import { InputLabel } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";

 function Booking() {
     const [file,setFile] = useState(null)
     const [updateCustomer,setUpdateCustomer] = useState({
        userName:"",
        date:null,
        destination:"",
        packageType:"",
        panNumber:null,
        noOfPeople:null,
        hotel:"",
        isCabNeeded:"",
        isGuideNeeded:""
     })

     const location = useLocation();

     const id = location.pathname.split("/")[2]

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
     }

     const handleFileUpload = async () =>{
        const formData = new FormData();
        formData.append("file",file)

        try{
            await axios.post("http://localhost:8080/upload/uploadfile/"+id,formData)
            .then(response => {
                console.log(response)
            })
            alert("uploaded")
        }catch (err){
            console.log(err)
        }
     }


     const handleChange = (e) => {
        setUpdateCustomer(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const handleClick = async (e) =>{
        e.preventDefault()

        try{
            await axios.put("http://localhost:8080/booking/users/2",updateCustomer)
            //navigate('/')
        }catch(err){
            console.log(err);
        }

    }

    return(
        <>
        
       <Card className="card">
       <Form>
            <h3>Book Now</h3>
            <div className="input-1">
            <Input type="text" className="input-1-field-1" name="userName" placeholder="Enter Name" onChange={handleChange}/>
            <Input type="date" name="date" placeholder="Enter Date" onChange={handleChange}/>
            </div>
            <div className="input">
            <Input type="text" name="destination" placeholder="Enter Destination" onChange={handleChange}/>
            </div>
            <div className="input-1">
            <Input type="text" className="input-1-field-1" name="destinationPackage" placeholder="Enter Package Type" onChange={handleChange}/>
            <Input type="number" name="noOfPeople" placeholder="Enter No. Of People" onChange={handleChange}/>
            </div>
            <div className="input">
            <Input type="text" name="hotel" placeholder="Enter Hotel" onChange={handleChange}/>
            </div>
            <div className="input-1">
            <Input type="number" className="input-1-field-1" name="panCardNumber" placeholder="Enter Pan Numer" onChange={handleChange}/>
            <Input type="file" name="file" onChange={handleFileChange}/>
            <Button className="input-1-field-2" onClick={handleFileUpload}>Upload</Button>
            </div>
            
            <div className="input">
            
            </div>
           
            <div className="input-1">
            <Input type="text" className="input-1-field-1" name="isCabNeed" onChange={handleChange}/>
            <Input type="text" name="isGuideNeeded" onChange={handleChange}/>
            </div>
            <div className="input">
            <Button onClick={handleClick}>Book Now</Button>
            </div>
        </Form>

       </Card>
        </>
    )
    
}

export default Booking;