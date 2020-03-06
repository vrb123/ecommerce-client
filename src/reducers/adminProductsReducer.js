import {
    ADMIN_ADD_PRODUCT,
    ADMIN_DELETE_PRODUCT,
    ADMIN_EDIT_PRODUCT,
    ADMIN_GET_ALL_PRODUCTS,
    ADMIN_GET_PRODUCT_BY_ID
} from '../actions/types';

const initialState = {products: []};


export default (state = initialState, action) => {

    switch (action.type) {
        case ADMIN_ADD_PRODUCT:
            return {
                products: [...state.products, action.payload]
            };
        case ADMIN_GET_ALL_PRODUCTS:
            return {
                products: [...action.payload]
            };
        case ADMIN_GET_PRODUCT_BY_ID:
            return {
                products: [action.payload]
            };
        case ADMIN_EDIT_PRODUCT:
            const {id, data} = action.payload;
            return {
                products: state.products.map(product => {
                        if (product.id === id) {
                            return {...product, ...data}
                        }
                        return product;
                    }
                )
            };
        case ADMIN_DELETE_PRODUCT:
            return {
                products: state.products.map(product => {
                    if (product.id === action.payload) {
                        product.status = 'DELETED';
                    }
                    return product;
                })
            };
        default:
            return state;
    }
};
