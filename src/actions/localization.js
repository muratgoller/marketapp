export const SET_LOCALIZATION = 'SET_LOCALIZATION'

const setLocalization = (resources) => {
    return {
        type: SET_LOCALIZATION,
		resources
    }
}

export default { 
	setLocalization
}