import { 
	SET_SORTING_TYPE
} from '../actions/sorting'
import { sortTypes } from '../constants/sort'

export const sorting = {
    type: sortTypes.priceAsc
}

const reducer = (state, action) => {
    switch(action.type){
		case SET_SORTING_TYPE :
		return {
			...state,
			sorting: {
                ...state.sorting,
                type: action.sortType
            },
            products: {
                ...state.products,
                grid: {
                    ...state.products.grid,
                    toggleRefresh: !state.products.grid.toggleRefresh
                }
            }
		}

        default: return state
    }
}

export default reducer