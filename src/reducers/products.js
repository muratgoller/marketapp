import { 
	SET_PRODUCTS_GRID_PAGE_COUNT,
    SET_PRODUCTS_GRID_ACTIVE_PAGE_NUMBER,
    SET_PRODUCTS_SELECTED_TYPE,
    SET_PRODUCTS_ALL
} from '../actions/products'
import { productTypes } from '../constants/product'

export const products = {
    grid: {
        pagesCount: 0,
        activePageNumber: 1,
        itemsPerPage: 16,
        toggleRefresh: false
    },
    selectedType: productTypes.mug,
    data: null
}

const reducer = (state, action) => {
    switch(action.type){
		case SET_PRODUCTS_GRID_PAGE_COUNT :
		return {
			...state,
			products: {
                ...state.products,
                grid: {
                    ...state.products.grid,
                    pagesCount: action.count
                }
            }
		}

        case SET_PRODUCTS_GRID_ACTIVE_PAGE_NUMBER :
		return {
			...state,
			products: {
                ...state.products,
                grid: {
                    ...state.products.grid,
                    activePageNumber: action.number,
                    toggleRefresh: !state.products.grid.toggleRefresh
                }
            }
		}

        case SET_PRODUCTS_SELECTED_TYPE :
		return {
			...state,
			products: {
                ...state.products,
                selectedType: action.pType,
                grid: {
                    ...state.products.grid,
                    toggleRefresh: !state.products.grid.toggleRefresh
                }
            }
		}

        case SET_PRODUCTS_ALL :
		return {
			...state,
			products: {
                ...state.products,
                data: action.products
            }
		}

        default: return state
    }
}

export default reducer