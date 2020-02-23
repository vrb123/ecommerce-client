import React from 'react';

import {Select} from 'antd';


import {ACTIVE, DELETED, NOT_ACTIVE} from '../../../constants/user_status';
import statusMap from '../../../hash_maps/status';

const availableStatuses = [ACTIVE, NOT_ACTIVE, DELETED];


export default ({value, onChange}) => (
    <Select
        value={value}
        placeholder="Please select a status"
        onChange={onChange}
    >
        {
            availableStatuses.map(status =>

                <Select.Option
                    key={status}
                    value={status}
                >
                    {statusMap[status]}
                </Select.Option>
            )
        }
    </Select>
)