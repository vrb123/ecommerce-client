import React from 'react';
import {Select} from 'antd';

import userRolesMap from '../../../../../../hash_maps/user_roles';

export default ({onChange,options,selected}) => {

    const filteredOptions = options.filter( o => !selected.includes(o) );
    
    return (
        <Select
            mode="multiple"
            placeholder="Select roles"
            labelInValue
            value={selected}
            onChange={ newSelected => {
                onChange(newSelected)
            }  }
            style={{width:'100%'}}
        >
            {
                filteredOptions.map((option,i) => (
                    
                    <Select.Option key={i} value={option} label={userRolesMap[option]}>
                        {userRolesMap[option]}
                    </Select.Option>
                
                ))
            }
        </Select>
    );
};