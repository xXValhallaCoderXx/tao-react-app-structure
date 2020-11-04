// Due to keeping our Action Creators and Reducer simple (No Logic)
// We can often use Dux methodolgy here to keep context in 1 file
// If it does get large and out of hand - we can split into multiple files by type

// This wont need to be changed anywhere else in App due to use exporting files via the 
// Barrel (index.js) file to rest of the application

const initialState = {
    isOpen: false,
    type: "success",
    message: null
}

export const TYPE = {
    OPEN: "@@TOAST/OPEN",
    CLOSE: "@@TOAST/CLOSE",
}

export const ACTIONS = {
    OPEN: (payload) => ({
        type: TYPE.OPEN,
        payload
    }),
    CLOSE: () => ({
        type: TYPE.CLOSE
    })
}

export const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.OPEN:
            return {
                ...state,
                isOpen: true,
                type: action.payload.type,
                message: action.payload.message
            }
        case TYPE.CLOSE:
            return {
                ...state,
                isOpen: false,
                type: "success",
                message: null
            }
        default:
            return state
    }
}