import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {editProduct, getProductById} from '../../../../actions/admin_products';
import {getSpecifications} from '../../../../actions/admin_specifications';

import {Result} from 'antd';

import AdminProductEditForm from './AdminProductEditForm';


import {useParams} from 'react-router-dom';

const AdminProductEdit = ({products, isLoading, editProduct, getProductById, getSpecifications, specifications}) => {

    const {id} = useParams();

    const [product, setProduct] = useState(null);

    const [error, setError] = useState(false);

    useEffect(() => {
        getProductById(id)
    }, [getProductById, id]);


    useEffect(() => {
        if (product && (!specifications || specifications.length === 0))
            getSpecifications();
    }, [product, getSpecifications, specifications]);


    useEffect(() => {
        const foundProduct = products.find(product => product.id == id);
        if (foundProduct)
            setProduct(foundProduct);
        else
            setError(true);
    }, [products, id]);

    if (product) {
        return (
            <AdminProductEditForm
                specifications={specifications}
                onSubmit={data => editProduct(id, data)}
                {...product}
            />
        );
    }

    if (!isLoading && error)
        return <Result title="404"/>;

    return null;
};

const mapStateToProps = state => ({
    specifications: state.specificationsReducer.specifications,
    products: state.adminProductsReducer.products,
    isLoading: state.loadingReducer.isLoading,
});

export default connect(mapStateToProps, {editProduct, getProductById, getSpecifications})(AdminProductEdit)