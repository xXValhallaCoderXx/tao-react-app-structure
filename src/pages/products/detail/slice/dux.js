// Due to keeping our Action Creators and Reducer simple (No Logic)
// We can often use Dux methodolgy here to keep context in 1 file
// If it does get large and out of hand - we can split into multiple files by type

// This wont need to be changed anywhere else in App due to use exporting files via the 
// Barrel (index.js) file to rest of the application

const initialState = {
    loading: false,
    error: null,
    success: null,
    data: null
}

export const TYPE = {
    REQUEST_DATA: "@@PRODUCTS_DETAIL/REQUEST_DATA",
    REQUEST_DATA_SUCCESS: "@@PRODUCTS_DETAIL/REQUEST_DATA_SUCCESS",
    REQUEST_DATA_FAILURE: "@@PRODUCTS_DETAIL/REQUEST_DATA_FAILURE"
}

export const ACTIONS = {
    REQUEST_DATA: (payload) => ({
        type: TYPE.REQUEST_DATA,
        payload
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



export const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.REQUEST_DATA:
            return {
                ...state,
                loading: true,
                error: null,
                data: null
            }
        case TYPE.REQUEST_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case TYPE.REQUEST_DATA_FAILURE:
            return {
                ...state,
                loading: true,
                error: null,
                data: null
            }
        default:
            return state
    }
}