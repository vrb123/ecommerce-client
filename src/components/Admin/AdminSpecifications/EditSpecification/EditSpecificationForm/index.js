import React, {useState} from 'react';
import {Button, Form, Input} from 'antd';

import StatusSelect from '../../../StatusSelect';

const EditSpecificationForm = ({onSubmit, name: initialName, formattedName: initialFormattedName, status: initialStatus}) => {

    const [name, setName] = useState(initialName);

    const [formattedName, setFormattedName] = useState(initialFormattedName);

    const [status, setStatus] = useState(initialStatus);

    const handleSubmit = e => {
        e.preventDefault();

        const objToSubmit = {};

        if (name && name.trim() !== "" && name !== initialName)
            objToSubmit.name = name;

        if (formattedName && formattedName.trim() !== "" && formattedName !== initialFormattedName)
            objToSubmit.formattedName = formattedName;

        if (status)
            objToSubmit.status = status;

        if (Object.keys(objToSubmit).length > 0) {
            onSubmit(objToSubmit);
        }

    };

    return (
        <Form onSubmit={handleSubmit}>

            <h1>Specification edit</h1>

            <Form.Item>
                <StatusSelect
                    value={status}
                    onChange={setStatus}
                />
            </Form.Item>


            <Form.Item>
                <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
            </Form.Item>


            <Form.Item>
                <Input
                    value={formattedName}
                    onChange={e => setFormattedName(e.target.value)}
                    placeholder="Formatted name"
                />
            </Form.Item>


            <Form.Item>
                <Button type="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
};


export default EditSpecificationForm;