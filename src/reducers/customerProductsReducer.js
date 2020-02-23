import {CUSTOMER_GET_ALL_PRODUCTS, CUSTOMER_GET_PRODUCT_DETAILS} from '../actions/types';

const initialState = {
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CUSTOMER_GET_ALL_PRODUCTS:
            return {
                products: action.payload
            };
        case CUSTOMER_GET_PRODUCT_DETAILS:
            const {id, productDetails} = action.payload;
            let maintainedProduct = false;
            const newProducts = state.products.map(product => {
                if (product.id === id) {
                    maintainedProduct = true;
                    return productDetails;
                }
                return product;
            });
            if (!maintainedProduct) newProducts.push(productDetails);
            return {
                products: newProducts
            };
        default:
            return state;
    }
};
