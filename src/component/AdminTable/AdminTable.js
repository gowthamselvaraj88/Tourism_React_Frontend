import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Button, Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

 function AdminTable(){
    const [customerList,setCustomerList] = useState([])

    useEffect(() => {
        const fetchCustomer = async () =>{
            try{
              const response = await axios.get("http://localhost:8080/admin/adminview");
              setCustomerList(response.data);
              //console.log(response.data)
              console.log(customerList)
            }catch(err){
                console.log(err);
            }
        }

        fetchCustomer();
    },[])

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8080/admin/admin/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }


    return(
        <>
        <div className="container">
            table
            <Card>
            <Table>
            <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Mobile</TableCell>
                            <TableCell>PAN Card</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Package</TableCell>
                            <TableCell>Members Count</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Hotel Type</TableCell>
                            <TableCell>Cab</TableCell>
                            <TableCell>Giude</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customerList.map((customerList,index) => {
                         <TableRow key={index}>
                             <TableCell>{customerList.userName}</TableCell>
                             <TableCell>{customerList.city}</TableCell>
                             <TableCell>{customerList.email}</TableCell>
                             <TableCell>{customerList.destination}</TableCell>
                             <TableCell>{customerList.date}</TableCell>
                             <TableCell><Button onClick={handleDelete}>Delete</Button></TableCell>
                         </TableRow>
                        })}
                    </TableBody>
            </Table>
            </Card>
        </div>
        </>
    )
}

export default AdminTable;