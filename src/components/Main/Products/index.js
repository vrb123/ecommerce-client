import React, {useEffect, useState} from "react";

import {customerGetAllProducts, customerGetProductDetails} from '../../../actions/customer_products'
import {connect} from 'react-redux';

import ProductList from './ProductsList';
import ProductDetails from './ProductDetails';

import {Col, Row} from "antd";

const Products = ({products, customerGetAllProducts, customerGetProductDetails}) => {

    const [showDetailsId, toggleShowDetails] = useState(false);
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        customerGetAllProducts()
    }, [customerGetAllProducts]);

    useEffect(() => {

        if (showDetailsId === false && productDetails !== null)
            setProductDetails(null);

        if (showDetailsId !== false && !productDetails) {
            const foundProduct = products.find(product => product.id === showDetailsId && product.productSpecifications);
            foundProduct && setProductDetails(foundProduct);
        }

    }, [showDetailsId, products, productDetails]);

    const onSingleProductShowDetails = async id => {
        toggleShowDetails(id);
        customerGetProductDetails(id);
    };

    return products && (
        <Row type="flex" align="middle" justify="center" style={{paddingTop: '2em'}}>
            <Col xs={23}>
                {
                    productDetails ?
                        <ProductDetails
                            onShowAll={() => toggleShowDetails(false)}
                            {...productDetails}
                        />
                        :
                        <ProductList
                            products={products}
                            onSinglePress={onSingleProductShowDetails}
                        />
                }

            </Col>
        </Row>
    );
};

const mapStateToProps = state => ({
    products: state.customerProductsReducer.products
});

export default connect(mapStateToProps, {customerGetAllProducts, customerGetProductDetails})(Products);