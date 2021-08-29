import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Redirect } from 'react-router-dom'
import { render } from 'react-dom'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import { getSortTypesArray } from '../../constants/sort'
import SortingAction from '../../actions/sorting'

const Index = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const storeSorting = useSelector(state => state.sorting)

    const handleSortingTypeChange = (type) => {
        if(type !== storeSorting.type){
            dispatch(SortingAction.setSortingType(type))
        }
    }

    return(
        <div>
            <div className={'mt10 ml5'}>{localization.sorting}</div>
            <div className='containerBG sortContainer'>
                { getSortTypesArray().map((s)=>(
                    <div className='sortItem' key={s}>
                        <Form.Check 
                            type='checkbox' 
                            label={localization['sort_' + s]} 
                            checked={storeSorting.type === s}
                            onChange={() => handleSortingTypeChange(s)}
                        ></Form.Check>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Index