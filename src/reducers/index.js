import initialState from './initialState'
import culture from './culture'
import localization from './localization'
import company from './company'
import products from './products'
import sorting from './sorting'
import tag from './tag'
import basket from './basket'

const reducer = (state = initialState, action) => {
    state = culture(state, action)
    state = localization(state, action)
    state = company(state, action)
    state = products(state, action)
    state = sorting(state, action)
    state = tag(state, action)
    state = basket(state, action)
    return state
}

export default reducer