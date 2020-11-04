// Massaging of data to fit our presentation components done at selectors
// Data is kept as is when kept in the store - so we can parse it how we need selectively

export const selectUser = state => state.user.user;

// This is a useless example - but you get the idea
export const selectUserName = state => {
    const { firstName, lastName } = state.user.user;
    return `${firstName} ${lastName}`
}