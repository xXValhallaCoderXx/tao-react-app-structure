export const selectProductDetail = state => state.productDetails.data || { address: {}, company: {} }
export const selectApiStatus = state => {
    return {
        loading: state.productDetails.loading,
        error: state.productDetails.error,
        success: state.productDetails.success
    }
}