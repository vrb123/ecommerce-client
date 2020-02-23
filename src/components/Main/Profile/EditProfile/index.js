import React, {useState} from "react";
import {Button, Divider, Form, Input} from 'antd';

export default ({onToggle, onSubmit, firstName: initFirstName, lastName: initLastName}) => {

    const [firstName, setFirstName] = useState(initFirstName || '');
    const [lastName, setLastName] = useState(initLastName || '');

    const handleSubmit = e => {
        e.preventDefault();

        const objToSubmit = {};

        if (firstName && firstName.trim() !== '' && firstName !== initFirstName)
            objToSubmit.firstName = firstName;

        if (lastName && lastName.trim() !== '' && lastName !== initLastName)
            objToSubmit.lastName = lastName;

        onSubmit(objToSubmit);
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Item>
                <h1>Edit profile <Divider type="vertical"/> <Button onClick={onToggle} type="dashed">Show</Button></h1>
            </Form.Item>

            <Form.Item>
                <Input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    icon="edit"
                    type="dashed"
                    onClick={handleSubmit}
                >Edit</Button>
            </Form.Item>

        </Form>
    );
};