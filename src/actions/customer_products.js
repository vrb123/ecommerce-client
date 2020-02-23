import {
    ALERT_FAILURE,
    ALERT_SUCCESS,
    CUSTOMER_GET_ALL_PRODUCTS,
    CUSTOMER_GET_PRODUCT_DETAILS,
    JWT_TOKEN_WRONG,
    REQUEST_SEND
} from './types';
import auth_header from "../helpers/auth_header";
import assertResponseOk from "./assertResponseOk";
import assertNotForbidden from "./assertNotForbidden";
import config from "../config";

export const customerGetAllProducts = () => {
    return async dispatch => {

        dispatch({
            type: REQUEST_SEND
        });

        try {
            const response = await fetch(`${config.API_URL}/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...auth_header()
                }
            });
            assertNotForbidden(response);
            assertResponseOk(response);

            const products = await response.json();

            setTimeout(() => {
                dispatch({
                    type: ALERT_SUCCESS,
                    payload: 'Successfully got products'
                });

                dispatch({
                    type: CUSTOMER_GET_ALL_PRODUCTS,
                    payload: products
                });

            }, 1000);
        } catch (err) {
            if (err.name === 'ForbiddenError') {
                dispatch({
                    type: JWT_TOKEN_WRONG
                });
                return;
            }

            dispatch({
                type: ALERT_FAILURE,
                payload: 'Failed to fetch products'
            });
        }
    };
};


export const customerGetProductDetails = id => {
    return async dispatch => {

        dispatch({
            type: REQUEST_SEND
        });

        try {
            const response = await fetch(`${config.API_URL}/products/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...auth_header()
                }
            });
            assertNotForbidden(response);
            assertResponseOk(response);

            const product = await response.json();

            setTimeout(() => {
                dispatch({
                    type: ALERT_SUCCESS,
                    payload: 'Successfully got product'
                });

                dispatch({
                    type: CUSTOMER_GET_PRODUCT_DETAILS,
                    payload: {
                        productDetails: product,
                        id
                    }
                });

            }, 1000);
        } catch (err) {
            if (err.name === 'ForbiddenError') {
                dispatch({
                    type: JWT_TOKEN_WRONG
                });
                return;
            }

            dispatch({
                type: ALERT_FAILURE,
                payload: 'Failed to fetch product details'
            })
        }
    };
};