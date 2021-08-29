import React, { useEffect, useState, useRef, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { FaLiraSign } from 'react-icons/fa'
import BasketAction from '../../actions/basket'
import Photo from './Photo'

const Item = ({ id, name, price }) => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const storeBasketProducts = useSelector((state) => state.basket.products)
    const gridReload = useSelector(state => state.products.grid.toggleRefresh)

    const handleAddProduct = () => {
        let products  = storeBasketProducts

        let productToModify = products.filter((p)=>(p.id === id))[0]

        if(productToModify === undefined){
            products.push({ id: id, name: name, qty: 1, unitPrice: price })
        }
        else{
            productToModify.qty = productToModify.qty + 1
        }

        dispatch(BasketAction.setBasketProducts(products))
    }

    const stageCanvasRef = useRef(null)

    return(
        <div className={'mt20'}>
            <div ref={stageCanvasRef} className={'productsItemBorder text-center h-75 w-100'}>
                {useMemo(() => (
                    <Photo size={stageCanvasRef.current === null ? null : Math.floor(stageCanvasRef.current.offsetWidth * 0.9)}></Photo>
                ), [stageCanvasRef.current, gridReload])}
            </div>
            <div className={'primaryTextColor textBold mt5'}>
                <FaLiraSign className={'moneySign'}></FaLiraSign>
                { price }
            </div>
            <div className={'mt3'}>
                { name }
            </div>
            <div className={'mt5'}>
                <Button 
                    className={'buttonSmall w-100'} 
                    size={'sm'} 
                    onClick={()=>handleAddProduct()}
                >{localization.add}</Button>
            </div>
        </div>
    )
}

export default Item