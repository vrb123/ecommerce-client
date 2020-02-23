import React, {useEffect, useState} from "react";

import StatusSelect from '../../../StatusSelect';
import ProductSpecificationDataInput from '../../ProductSpecificationDataInput';

import {Button, Form, Input, InputNumber} from 'antd';

const {TextArea} = Input;


export default ({onSubmit, specifications, ...product}) => {

    const {
        name: initName,
        description: initDescription,
        cost: initCost,
        status: initStatus,
        productSpecifications: initProductSpecifications
    } = product;

    const [name, setName] = useState(initName);
    const [description, setDescription] = useState(initDescription || '');
    const [cost, setCost] = useState(initCost);
    const [status, setStatus] = useState(initStatus);
    const [specMap, setSpecMap] = useState({});
    const [initSelectedOptions, setInitSelectedOptions] = useState([]);
    const [hasLoaded, setLoaded] = useState(false);

    useEffect(() => {
        const initMap = {};
        const initOptions = [];
        initProductSpecifications.forEach(o => {
            initMap[o.name] = o.value;
            initOptions.push({key: o.name, label: o.formattedName});
        });
        setSpecMap(initMap);
        setInitSelectedOptions(initOptions);
        setLoaded(true);
    }, [setSpecMap, setLoaded]);


    const handleSubmit = e => {
        e.preventDefault();
        const objToSubmit = {};

        if (name && name.trim() !== '' && name !== initName)
            objToSubmit.name = name;

        if (description && description.trim() !== '' && description !== initDescription)
            objToSubmit.description = description;

        if (cost && cost !== initCost)
            objToSubmit.cost = cost;

        if (status && status !== initStatus)
            objToSubmit.status = status;

        const productSpecificationsToSubmit = Object.entries(specMap).map(([name, value]) => ({name, value}));

        objToSubmit.productSpecifications = productSpecificationsToSubmit;

        onSubmit(objToSubmit);

    };

    const onMapChange = (key, value) => {
        const newMap = {...specMap};
        newMap[key] = value;
        setSpecMap(newMap);
    };

    if (!hasLoaded)
        return null;

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Item>
                <h1>Product Edit</h1>
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

            <Form.Item label="Status">
                <StatusSelect
                    onChange={setStatus}
                    value={status}
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