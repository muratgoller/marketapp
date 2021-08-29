import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import TagAction from '../../actions/tag'

const Search = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const storeTags = useSelector(state => state.tag)

    useEffect(() => {
        if(storeTags.filter !== null){
            let tags = storeTags.data

            Object.keys(tags).map((key)=>{
                tags[key].display = tags[key].text.toUpperCase().replaceAll(' ','').includes(storeTags.filter.toUpperCase().replaceAll(' ',''))
            })

            dispatch(TagAction.setTags(tags))
        }
    }, [storeTags.filter])

    return(
        <InputGroup className="mb-3">
            <FormControl
                className={'fs12'}
                placeholder={localization.searchTag}
                onChange={(e)=>dispatch(TagAction.setTagsFilter(e.target.value))}
            />
        </InputGroup>
    )
}

export default Search