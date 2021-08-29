import { 
	SET_COMPANIES,
	SET_COMPANIES_FILTER,
	SET_COMPANY_CHECKED_STATUS,
	SET_COMPANY_ALL_CHECKED_STATUS
} from '../actions/company'

export const company = {
	data: [],
	filter: null,
	allChecked: true
}

const reducer = (state, action) => {
    switch(action.type){
		case SET_COMPANIES :
		return {
			...state,
			company: {
				...state.company,
				data: action.companies
			}
		}

		case SET_COMPANIES_FILTER :
		return {
			...state,
			company: {
				...state.company,
				filter: action.filter
			}
		}

		case SET_COMPANY_CHECKED_STATUS :

		const allChecked = (Object.keys(state.company.data).filter((key)=>(state.company.data[key].checked)).length === 1 && !action.status)

		return {
			...state,
			company: {
				...state.company,
				data: {
					...state.company.data,
					[action.key]: {
						...state.company.data[action.key],
						checked: action.status
					}
				},
				allChecked: allChecked
			},
			products: {
				...state.products,
				grid: {
					...state.products.grid,
					activePageNumber: 1,
					toggleRefresh: !state.products.grid.toggleRefresh
				}
			}
		}

		case SET_COMPANY_ALL_CHECKED_STATUS :

		let companiesDataToModify = state.company.data

		if(action.status){
			Object.keys(companiesDataToModify).map((key)=>(
				companiesDataToModify[key].checked = false
			))
		}

		return {
			...state,
			company: {
				...state.company,
				allChecked: action.status,
				data: companiesDataToModify
			},
			products: {
				...state.products,
				grid: {
					...state.products.grid,
					activePageNumber: 1,
					toggleRefresh: !state.products.grid.toggleRefresh
				}
			}
		}

        default: return state
    }
}

export default reducer