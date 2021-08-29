import { 
	SET_LOCALIZATION
} from '../actions/localization'

export const localization = null

const reducer = (state, action) => {
    switch(action.type){
		case SET_LOCALIZATION :
		return {
			...state,
			localization: action.resources
		}

        default: return state
    }
}

export default reducer