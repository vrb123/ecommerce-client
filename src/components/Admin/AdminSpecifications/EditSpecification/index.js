import React, {useEffect, useState} from 'react';
import EditSpecificationForm from './EditSpecificationForm';

import {Result} from 'antd';

import {useParams} from 'react-router-dom';

import {connect} from 'react-redux';
import {editSpecification, getSpecificationById} from '../../../../actions/admin_specifications';


const EditSpecification = ({specifications, isLoading, getSpecificationById, editSpecification}) => {

    const {id} = useParams();

    const [specification, setSpecification] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        getSpecificationById(id)
    }, [getSpecificationById, id]);


    useEffect(() => {
        const foundSpecification = specifications.find(spec => spec.id == id);
        if (!foundSpecification) {
            setError(true);
        } else {
            setSpecification(foundSpecification);
        }
    }, [specifications, id]);


    if (specification) {
        return (
            <EditSpecificationForm
                onSubmit={data => editSpecification(id, data)}
                {...specification}
            />
        );
    }

    if (error && !isLoading) {
        return <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
        />
    }

    return null;
};

const mapStateToProps = state => ({
    specifications: state.specificationsReducer.specifications,
    isLoading: state.loadingReducer.isLoading
});

export default connect(mapStateToProps, {getSpecificationById, editSpecification})(EditSpecification)