import { 
	SET_TAGS,
    SET_TAGS_FILTER,
    SET_TAG_CHECKED_STATUS,
    SET_TAG_ALL_CHECKED_STATUS
} from '../actions/tag'

export const tag = {
	data: [],
	filter: null,
	allChecked: true
}

const reducer = (state, action) => {
    switch(action.type){
		case SET_TAGS :
		return {
			...state,
			tag: {
				...state.tag,
				data: action.tags
			}
		}

		case SET_TAGS_FILTER :
		return {
			...state,
			tag: {
				...state.tag,
				filter: action.filter
			}
		}

		case SET_TAG_CHECKED_STATUS :

        const allChecked = (Object.keys(state.tag.data).filter((key)=>(state.tag.data[key].checked)).length === 1 && !action.status)

		return {
			...state,
			tag: {
				...state.tag,
				data: {
					...state.tag.data,
					[action.key]: {
						...state.tag.data[action.key],
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

		case SET_TAG_ALL_CHECKED_STATUS :

		let tagsDataToModify = state.tag.data

		if(action.status){
			Object.keys(tagsDataToModify).map((key)=>(
				tagsDataToModify[key].checked = false
			))
		}

		return {
			...state,
			tag: {
				...state.tag,
				allChecked: action.status,
				data: tagsDataToModify
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