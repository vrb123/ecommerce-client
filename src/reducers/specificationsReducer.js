import {
    ADMIN_ADD_SPECIFICATION,
    ADMIN_DELETE_SPECIFICATION,
    ADMIN_EDIT_SPECIFICATION,
    ADMIN_GET_ALL_SPECIFICATIONS,
    ADMIN_GET_SPECIFICATION_BY_ID
} from '../actions/types';

const initialState = {specifications: []};


export default (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_GET_ALL_SPECIFICATIONS:
            return {
                specifications: [...action.payload]
            };
        case ADMIN_GET_SPECIFICATION_BY_ID:
            return {
                specifications: [...state.specifications, action.payload]
            };
        case ADMIN_ADD_SPECIFICATION:
            return {
                specifications: [...state.specifications, action.payload]
            };
        case ADMIN_DELETE_SPECIFICATION:
            return {
                specifications: state.specifications.map(spec => {
                    if (spec.id === action.payload)
                        spec.status = 'DELETED';
                    return spec;
                })
            };
        case ADMIN_EDIT_SPECIFICATION:
            const {id, data} = action.payload;
            return {
                specifications: state.specifications.map(spec => {
                    if (spec.id === id) {
                        return {
                            ...spec,
                            ...data
                        }
                    }
                    return spec;
                })
            };
        default:
            return {...state}
    }
};