export const SET_CULTURE = 'SET_CULTURE'

const setCulture = (cultureCode) => {
    return {
        type: SET_CULTURE,
		cultureCode
    }
}

export default { 
	setCulture
}