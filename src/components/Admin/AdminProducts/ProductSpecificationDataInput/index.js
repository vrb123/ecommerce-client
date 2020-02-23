import React, {useEffect, useState} from "react";

import ProductSpecificationSelect from './ProductSpecificationSelect';

import {Input, Table} from 'antd';
import {Divider} from "antd/es";


const mockData = [
    {
        "name": "weight",
        "formattedName": "Weight",
        "id": 1,
        "status": "ACTIVE"
    },
    {
        "name": "height",
        "formattedName": "Height",
        "id": 2,
        "status": "ACTIVE"
    },
    {
        "name": "color",
        "formattedName": "Color",
        "id": 3,
        "status": "ACTIVE"
    },
    {
        "name": "material",
        "formattedName": "Material",
        "id": 4,
        "status": "ACTIVE"
    },
    {
        "name": "brand",
        "formattedName": "Brand",
        "id": 5,
        "status": "ACTIVE"
    }
];

const columns = [
    {title: 'Name of specification', dataIndex: 'name', key: 'name', align: 'center'},
    {title: 'Value', dataIndex: 'value', key: 'value', align: 'center'}
];


export default ({initSelected, onChange, specOptions, specMap, onSpecMapChange}) => {

    const [selectedSpecs, setSelectedSpecs] = useState(initSelected);

    useEffect(() => {
        const newMap = {};
        selectedSpecs.forEach(selected => {
            newMap[selected.key] = specMap[selected.key] || ''
        });
        onSpecMapChange(newMap);
    }, [selectedSpecs]);


    const representSpecDataEntry = () => selectedSpecs.map(
        selectedSpec => ({
            name: selectedSpec.label,
            value: <Input
                value={specMap[selectedSpec.key]}
                onChange={e => onChange(selectedSpec.key, e.target.value)}
                placeholder={selectedSpec.label}
            />,
            key: selectedSpec.key
        })
    );

    return (
        <>
            <ProductSpecificationSelect
                options={specOptions || []}

                selected={selectedSpecs}
                onChange={setSelectedSpecs}
            />

            {
                selectedSpecs.length > 0 && (
                    <>
                        <Divider/>
                        <Table
                            bordered={true}
                            pagination={false}
                            tableLayout="fixed"
                            columns={columns}
                            dataSource={representSpecDataEntry()}
                        />
                    </>

                )
            }

        </>

    )
};
