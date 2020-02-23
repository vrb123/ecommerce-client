import React, {useEffect} from "react";

import {connect} from 'react-redux';
import {addProduct} from '../../../../actions/admin_products';
import {getSpecifications} from '../../../../actions/admin_specifications';

import AdminAddProductForm from './AdminProductAddForm';

const AdminAddProduct = ({addProduct, getSpecifications, specifications}) => {

    useEffect(() => {
        getSpecifications();
    }, [getSpecifications]);

    return (
        <AdminAddProductForm
            onSubmit={data => addProduct(data)}
            specifications={specifications}
        />
    );
};

const mapStateToProps = state => ({
    specifications: state.specificationsReducer.specifications
});

export default connect(mapStateToProps, {addProduct, getSpecifications})(AdminAddProduct);