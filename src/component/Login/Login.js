import { Button, Card, Form, Input } from "antd";
import React from "react";
import '../Login/Login.css'
import { FormLabel } from "react-bootstrap";

 function Login() {
    return(
        <>
        <h1>Welcome</h1>
       <Card className="card">
       <Form>
            <h3>Login</h3>
            <div className="input">
                <FormLabel>Email</FormLabel>
            <Input type="text" name="uerEmail" placeholder="Enter Email"/>
            </div>
            <div className="input">
            <Input type="password" name="password" placeholder="Enter password"/>
            </div>
            <div className="input">
            <Button>Login</Button>
            </div>
        </Form>

       </Card>
        </>
    )
    
}

export default Login;