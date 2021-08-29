import { 
	SET_CULTURE
} from '../actions/culture'
import { cultureCodes } from '../constants/culture'

export const culture = cultureCodes.en

const reducer = (state, action) => {
    switch(action.type){
		case SET_CULTURE :
		return {
			...state,
			culture: action.cultureCode
		}

        default: return state
    }
}

export default reducer