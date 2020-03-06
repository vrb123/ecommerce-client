import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import {List, Skeleton} from 'antd';

import SpecificationStatus from './SpecificationStatus';
import SpecificationActions from './SpecificationActions';

const SpecificationRow = ({onDelete, ...specification}) => {

    const {id, name, formattedName, status} = specification;

    const {path} = useRouteMatch();

    const actions = SpecificationActions({
        id,
        onDelete: id => {
            onDelete(id)
        },
        editHref: `${path}/edit/${id}`
    });

    return (
        <List.Item
            key={id}
            actions={actions}
        >
            <Skeleton title={false} loading={false} key={id} active>

                <List.Item.Meta
                    title={
                        <div>
                            {formattedName} <SpecificationStatus status={status}/>
                        </div>
                    }
                    description={name}
                />

            </Skeleton>
        </List.Item>
    );
};

export default SpecificationRow;