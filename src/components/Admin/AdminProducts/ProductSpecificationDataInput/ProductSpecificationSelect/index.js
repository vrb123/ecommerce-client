import React from "react";

import {Select} from 'antd';

export default ({selected, onChange, options, placeholder = "Select specifications", ...props}) => {

    const filteredOptions = options.filter(o => !selected.includes(o));

    return (
        <Select
            mode="multiple"
            placeholder={placeholder}
            labelInValue
            value={selected}
            onChange={onChange}
            onDeselect={console.log}
            style={{width: '100%'}}
            {...props}
        >
            {
                filteredOptions.map((option, i) => (

                    <Select.Option key={i} value={option.name} label={option.formattedName}>
                        {option.formattedName}
                    </Select.Option>

                ))
            }
        </Select>
    );

};