export const SET_COMPANIES = 'SET_COMPANIES'
export const SET_COMPANIES_FILTER = 'SET_COMPANIES_FILTER'
export const SET_COMPANY_CHECKED_STATUS = 'SET_COMPANY_CHECKED_STATUS'
export const SET_COMPANY_ALL_CHECKED_STATUS = 'SET_COMPANY_ALL_CHECKED_STATUS'

const setCompanies = (companies) => {
    return {
        type: SET_COMPANIES,
		companies
    }
}

const setCompaniesFilter = (filter) => {
    return {
        type: SET_COMPANIES_FILTER,
		filter
    }
}

const setCompanyCheckedStatus = (key, status) => {
    return {
        type: SET_COMPANY_CHECKED_STATUS,
		key,
        status
    }
}

const setCompanyAllCheckedStatus = (status) => {
    return {
        type: SET_COMPANY_ALL_CHECKED_STATUS,
        status
    }
}

export default { 
	setCompanies,
    setCompaniesFilter,
    setCompanyCheckedStatus,
    setCompanyAllCheckedStatus
}