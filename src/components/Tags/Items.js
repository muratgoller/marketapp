import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import { getItems } from '../../business/api'
import TagAction from '../../actions/tag'

const Items = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const storeTags = useSelector(state => state.tag)
    const storeProductsData = useSelector(state => state.products.data)

    useEffect(() => {
        if(storeProductsData !== null){
            let resp = storeProductsData

            let tags = []
            resp.map((item)=>(
                item.tags.map((tag)=>(
                    tags.push(tag)
                ))
            ))

            const groupByArray = tags.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))

            tags = [...new Set(tags)].sort((a, b) => a - b)

            let result = {}

            tags.map((t)=>(
                result[t] = { text: t, checked: false, display: true, count: groupByArray[t] }
            ))
            dispatch(TagAction.setTags(result))
        }
    }, [storeProductsData])

    const toggleItemCheckedStatus = (key, checked) => {
        dispatch(TagAction.setTagCheckedStatus(key, checked))
    }

    const toggleAllCheckedStatus = (checked) => {
        if(checked){
            dispatch(TagAction.setTagAllCheckedStatus(checked))
        }
    }

    return(
        <div className={'brandItems'}>
            { Object.keys(storeTags.data).map((key, index)=>(
                <div className='sortItem' key={key}>
                    <div>
                        { ((storeTags.filter === null || storeTags.filter === '') && index === 0) ? (
                            <Form.Check
                                type='checkbox' 
                                label={localization.all} 
                                checked={storeTags.allChecked}
                                onChange={()=>toggleAllCheckedStatus(!storeTags.allChecked)}
                            ></Form.Check>
                        ) : null }
                    </div>  
                    <div className={'mt10'}>
                        { storeTags.data[key].display ? (
                            <Form.Check
                                type='checkbox' 
                                label={storeTags.data[key].text + ' (' + storeTags.data[key].count + ')'} 
                                checked={storeTags.data[key].checked}
                                onChange={()=>toggleItemCheckedStatus(key, !storeTags.data[key].checked)}
                            ></Form.Check>
                        ) : null }
                    </div>
                </div>
            )) }
        </div>
    )
}

export default Items