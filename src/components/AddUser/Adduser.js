import React, {useState} from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
import Row from "../Layout/Row";

const AddUser = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        phone: '',
        address: '',
        type: ''
    });
    const onChangeHander = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setForm((prevState) => {
            return { ...prevState, [key]: value }
        })
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
    };
    return ( 
        <Form onSubmit={onSubmitHandler}>
        <Form.Controller>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" value={form.name} onChange={(e) => onChangeHander(e.target.value)}></input>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="age">Age</label>
                <input type="text" id="age" placeholder="Enter Your Age" value={form.age} onChange={(e) => onChangeHander(e.target.value)}></input>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="Enter Your Phone" value={form.phone} onChange={(e) => onChangeHander(e.target.value)}></input>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter Your Address" value={form.address} onChange={(e) => onChangeHander(e.target.value)}></input>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="type">Type</label>
            <input type="text" id="type" placeholder="Enter Your Type" value={form.type} onChange={(e) => onChangeHander(e.target.value)}></input>
        </Form.Controller>
        <Row>
            <Button type="submit">Save</Button>
            <Button type="reset">Reset</Button>
        </Row>
    </Form>
    );
}

export default AddUser;