export const SET_SORTING_TYPE = 'SET_SORTING_TYPE'

const setSortingType = (sortType) => {
    return {
        type: SET_SORTING_TYPE,
		sortType
    }
}

export default { 
	setSortingType
}