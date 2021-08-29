import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProductsAction from '../../actions/products'
import { productTypes } from '../../constants/product'

const Types = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const storeProducts = useSelector(state => state.products)

    const handleTogglePType = (type) => {
        if(storeProducts.selectedType !== type){
            dispatch(ProductsAction.setProductsSelectedType(type))
        }
    }

    return(
        <div className={'alignDivsH mt10'}>
            <div>
                <Button 
                    className={(productTypes.mug === storeProducts.selectedType ? 'buttonSmall' : 'buttonSmallOutline') + ' h30'} 
                    size={'sm'}
                    onClick={()=>handleTogglePType(productTypes.mug)}
                >{localization.mug}</Button>
            </div>
            <div className={'ml5'}>
                <Button 
                    className={(productTypes.shirt === storeProducts.selectedType ? 'buttonSmall' : 'buttonSmallOutline') + ' h30'} 
                    size={'sm'}
                    onClick={()=>handleTogglePType(productTypes.shirt)}
                >{localization.shirt}</Button>
            </div>
        </div>
    )
}

export default Types