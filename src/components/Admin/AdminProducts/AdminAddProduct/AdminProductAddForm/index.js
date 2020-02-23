import React, {useState} from "react";

import ProductSpecificationDataInput from '../../ProductSpecificationDataInput';

import {Button, Form, Input, InputNumber} from 'antd';

const {TextArea} = Input;


export default ({onSubmit, specifications}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState(0);
    const [specMap, setSpecMap] = useState({});
    const initSelectedOptions = [];


    const handleSubmit = e => {
        e.preventDefault();
        const objToSubmit = {};

        if (name && name.trim() !== '')
            objToSubmit.name = name;

        if (description && description.trim() !== '')
            objToSubmit.description = description;

        if (cost)
            objToSubmit.cost = cost;

        const productSpecificationsToSubmit = Object.entries(specMap).map(([name, value]) => ({name, value}));

        objToSubmit.productSpecifications = productSpecificationsToSubmit;

        onSubmit(objToSubmit);

    };

    const onMapChange = (key, value) => {
        const newMap = {...specMap};
        newMap[key] = value;
        setSpecMap(newMap);
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Item>
                <h1>Add product</h1>
            </Form.Item>

            <Form.Item label="Name">
                <Input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Form.Item>

            <Form.Item label="Description">
                <TextArea
                    rows={5}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </Form.Item>

            <Form.Item label="Cost">
                <InputNumber
                    step={0.5}
                    value={cost}
                    onChange={setCost}
                />
            </Form.Item>

            <Form.Item label="Specifications">
                <ProductSpecificationDataInput
                    onChange={onMapChange}
                    specOptions={specifications}
                    specMap={specMap}
                    onSpecMapChange={setSpecMap}
                    initSelected={initSelectedOptions}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    onClick={handleSubmit}
                    type="primary"
                >Submit</Button>
            </Form.Item>

        </Form>
    );
};