import React from 'react';
import {Table} from 'antd';

export default ({record, index}) => {
    const columns = [
        {title: 'Name', dataIndex: 'name', key: 'name', align: 'center'},
        {title: 'Value', dataIndex: 'value', key: 'value', align: 'center'}
    ];

    const representProductSpec = record => {
        const {productSpecifications} = record;
        return productSpecifications.map((pS, i) => ({
            name: pS.formattedName,
            value: pS.value,
            key: pS.name + pS.formattedName + i
        }));
    };

    return (
        <Table
            columns={columns}
            bordered
            size="small"
            pagination={false}
            tableLayout="fixed"
            dataSource={representProductSpec(record)}
        />
    );
};