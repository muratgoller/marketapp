export const SET_PRODUCTS_GRID_PAGE_COUNT = 'SET_PRODUCTS_GRID_PAGE_COUNT'
export const SET_PRODUCTS_GRID_ACTIVE_PAGE_NUMBER = 'SET_PRODUCTS_GRID_ACTIVE_PAGE_NUMBER'
export const SET_PRODUCTS_SELECTED_TYPE = 'SET_PRODUCTS_SELECTED_TYPE'
export const SET_PRODUCTS_ALL = 'SET_PRODUCTS_ALL'

const setProductsGridPageCount = (count) => {
    return {
        type: SET_PRODUCTS_GRID_PAGE_COUNT,
		count
    }
}

const setProductsGridActivePageNumber = (number) => {
    return {
        type: SET_PRODUCTS_GRID_ACTIVE_PAGE_NUMBER,
		number
    }
}

const setProductsSelectedType = (pType) => {
    return {
        type: SET_PRODUCTS_SELECTED_TYPE,
		pType
    }
}

const setProductsAll = (products) => {
    return {
        type: SET_PRODUCTS_ALL,
		products
    }
}

export default { 
	setProductsGridPageCount,
    setProductsGridActivePageNumber,
    setProductsSelectedType,
    setProductsAll
}