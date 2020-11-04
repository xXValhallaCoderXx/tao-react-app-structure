// Due to keeping our Action Creators and Reducer simple (No Logic)
// We can often use Dux methodolgy here to keep context in 1 file
// If it does get large and out of hand - we can split into multiple files by type

// This wont need to be changed anywhere else in App due to use exporting files via the 
// Barrel (index.js) file to rest of the application

const initialState = {
    loading: false,
    error: null,
    success: null,
    items: []
}

export const TYPE = {
    REQUEST_DATA: "@@PRODUCTS_LIST/REQUEST_DATA",
    REQUEST_DATA_SUCCESS: "@@PRODUCTS_LIST/REQUEST_DATA_SUCCESS",
    REQUEST_DATA_FAILURE: "@@PRODUCTS_LIST/REQUEST_DATA_FAILURE"
}

export const ACTIONS = {
    REQUEST_DATA: () => ({
        type: TYPE.REQUEST_DATA
    }),
    REQUEST_DATA_SUCCESS: (payload) => ({
        type: TYPE.REQUEST_DATA_SUCCESS,
        payload
    }),
    REQUEST_DATA_FAILURE: (payload) => ({
        type: TYPE.REQUEST_DATA_FAILURE,
        payload
    })
}

export const selectProducts = state => state.productList.items

export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.REQUEST_DATA:
            return {
                ...state,
                loading: true,
                error: null,
                items: []
            }
        case TYPE.REQUEST_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload
            }
        case TYPE.REQUEST_DATA_FAILURE:
            return {
                ...state,
                loading: true,
                error: null,
                items: []
            }
        default:
            return state
    }
}