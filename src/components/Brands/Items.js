import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import { getCompanies } from '../../business/api'
import CompanyAction from '../../actions/company'

const Items = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const company = useSelector(state => state.company)
    const storeProductsData = useSelector(state => state.products.data)

    useEffect(() => {
        if(storeProductsData !== null){
            getCompanies().then((resp)=>{
                let companies = {}
                resp.map((c)=>(
                    companies[c.slug] = { text: c.name, checked: false, display: true, count: storeProductsData.filter((d)=>(d.manufacturer === c.slug)).length }
                ))
                dispatch(CompanyAction.setCompanies(companies))
            })
        }
    }, [storeProductsData])

    const toggleItemCheckedStatus = (key, checked) => {
        dispatch(CompanyAction.setCompanyCheckedStatus(key, checked))
    }

    const toggleAllCheckedStatus = (checked) => {
        if(checked){
            dispatch(CompanyAction.setCompanyAllCheckedStatus(checked))
        }
    }

    return(
        <div className={'brandItems'}>
            { Object.keys(company.data).map((key, index)=>(
                <div className='sortItem' key={key}>
                    <div>
                        { ((company.filter === null || company.filter === '') && index === 0) ? (
                            <Form.Check
                                type='checkbox' 
                                label={localization.all}
                                checked={company.allChecked}
                                onChange={()=>toggleAllCheckedStatus(!company.allChecked)}
                            ></Form.Check>
                        ) : null }
                    </div>  
                    <div className={'mt10'}>
                        { company.data[key].display ? (
                            <Form.Check
                                type='checkbox' 
                                label={company.data[key].text + ' (' + company.data[key].count + ')'} 
                                checked={company.data[key].checked}
                                onChange={()=>toggleItemCheckedStatus(key, !company.data[key].checked)}
                            ></Form.Check>
                        ) : null }
                    </div>
                </div>
            )) }
        </div>
    )
}

export default Items