import React, {useState} from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
import Row from "../Layout/Row";

const AddUser = ({addNewUserHandler}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [type, setType] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        addNewUserHandler({
            id: Math.round(Math.random() * 100),
            name,
            age,
            phone,
            address,
            type,
        });
    };
    return ( 
        <Form onSubmit={onSubmitHandler}>
        <Form.Controller>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="age">Age</label>
                <input type="text" id="age" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)}></input>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="Enter Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="type">Type</label>
            <input type="text" id="type" placeholder="Enter Your Type" value={type} onChange={(e) => setType(e.target.value)}></input>
        </Form.Controller>
        <Row>
            <Button type="submit">Save</Button>
            <Button type="reset">Reset</Button>
        </Row>
    </Form>
    );
}

export default AddUser;