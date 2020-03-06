import React, {useEffect, useState} from 'react';
import {Button, Divider, List} from 'antd';

import {addSpecification, deleteSpecification, getSpecifications} from '../../../../actions/admin_specifications';
import {connect} from 'react-redux';

import SpecificationRow from './SpecificationRow';
import AddSpecificationForm from './AddSpecificationForm';

const SpecificationList = ({specifications, getSpecifications, deleteSpecification, addSpecification}) => {

    const [showAddForm, toggleAddForm] = useState(false);

    useEffect(() => {
        getSpecifications()
    }, [getSpecifications]);

    const onSpecificationDelete = id => {
        deleteSpecification(id)
    };

    const renderSpecification = specification => (
        <SpecificationRow
            {...specification}
            onDelete={onSpecificationDelete}
        />
    );

    return (
        <>
            {showAddForm && <AddSpecificationForm onSubmit={addSpecification}/>}
            <List
                header={
                    <h1>
                        Specifications <Divider type="vertical"/> <Button
                        type="dashed"
                        icon={showAddForm ? "minus" : "plus"}
                        onClick={e => toggleAddForm(!showAddForm)}
                    > {showAddForm ? "Hide" : "Add"} </Button>
                    </h1>
                }
                dataSource={specifications}
                renderItem={renderSpecification}
            />
        </>

    );

};

const mapStateToProps = state => ({
    specifications: state.specificationsReducer.specifications
});

export default connect(mapStateToProps, {getSpecifications, deleteSpecification, addSpecification})(SpecificationList)