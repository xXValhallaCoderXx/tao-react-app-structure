// Due to keeping our Action Creators and Reducer simple (No Logic)
// We can often use Dux methodolgy here to keep context in 1 file
// If it does get large and out of hand - we can split into multiple files by type

// This wont need to be changed anywhere else in App due to use exporting files via the 
// Barrel (index.js) file to rest of the application

const initialState = {
    user: null
}

export const TYPE = {
    SET_USER: "@@USER/SET_USER"
}

export const ACTIONS = {
    SET_USER: (payload) => ({
        type: TYPE.SET_USER,
        payload
    })
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}