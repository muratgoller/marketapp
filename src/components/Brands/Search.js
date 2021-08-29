import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Redirect } from 'react-router-dom'
import { render } from 'react-dom'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import { getSortTypesArray } from '../../constants/sort'
import { getCompanies } from '../../business/api'
import CompanyAction from '../../actions/company'

const Search = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const company = useSelector(state => state.company)

    useEffect(() => {
        if(company.filter !== null){
            let companies = company.data

            Object.keys(companies).map((key)=>{
                companies[key].display = companies[key].text.toUpperCase().replaceAll(' ','').includes(company.filter.toUpperCase().replaceAll(' ',''))
            })

            dispatch(CompanyAction.setCompanies(companies))
        }
    }, [company.filter])

    return(
        <InputGroup className="mb-3">
            <FormControl
                className={'fs12'}
                placeholder={localization.searchBrand}
                onChange={(e)=>dispatch(CompanyAction.setCompaniesFilter(e.target.value))}
            />
        </InputGroup>
    )
}

export default Search