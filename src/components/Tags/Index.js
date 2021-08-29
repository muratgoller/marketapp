import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Search from './Search'
import Items from './Items'

const Index = () => {
    const localization = useSelector(state => state.localization)

    return(
        <div>
            <div className={'mt20 ml5'}>{localization.tags}</div>
            <div className='containerBG brandContainer'>
                <Search></Search>
                <Items></Items>
            </div>
        </div>
    )
}

export default Index