import { 
	SET_BASKET_MODAL_VISIBLE_STATUS,
    SET_BASKET_PRODUCTS
} from '../actions/basket'

export const basket = {
    modalVisible: false,
    products: [],
    totalCost: 0
}

const reducer = (state, action) => {
    switch(action.type){
		case SET_BASKET_MODAL_VISIBLE_STATUS :
		return {
			...state,
			basket: {
                ...state.basket,
                modalVisible: action.status
            }
		}

        case SET_BASKET_PRODUCTS :

        let totalCost = 0

        action.products.map((p)=>(
            totalCost = totalCost + (p.qty * p.unitPrice)
        ))

		return {
			...state,
			basket: {
                ...state.basket,
                products: action.products,
                totalCost: totalCost
            }
		}

        default: return state
    }
}

export default reducer