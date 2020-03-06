import React, {useState} from 'react';
import {Button, Form, Input} from 'antd';


export default ({onSubmit}) => {

    const [name, setName] = useState('');
    const [formattedName, setFormattedName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (name && name.trim() !== '' && formattedName && formattedName.trim() !== '')
            onSubmit({
                name,
                formattedName
            });
    };

    return (
        <Form onSubmit={handleSubmit}>

            <h1>Add specification form</h1>

            <Form.Item>
                <Input
                    type="text"
                    value={name}
                    placeholder="Name of specification"
                    onChange={e => setName(e.target.value)}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    type="text"
                    value={formattedName}
                    placeholder="Formatted name of specification"
                    onChange={e => setFormattedName(e.target.value)}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    onClick={handleSubmit}
                >Submit</Button>
            </Form.Item>

        </Form>
    );

};