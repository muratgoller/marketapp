export const SET_BASKET_MODAL_VISIBLE_STATUS = 'SET_BASKET_MODAL_VISIBLE_STATUS'
export const SET_BASKET_PRODUCTS = 'SET_BASKET_PRODUCTS'

const setBasketModalVisibleStatus = (status) => {
    return {
        type: SET_BASKET_MODAL_VISIBLE_STATUS,
		status
    }
}

const setBasketProducts = (products) => {
    return {
        type: SET_BASKET_PRODUCTS,
		products
    }
}

export default { 
	setBasketModalVisibleStatus,
    setBasketProducts
}