import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import BasketAction from '../../actions/basket'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Counter = ({id}) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.basket.products)

    const qty = products.filter((p)=>(p.id === id))[0].qty

    const increase = () => {
        let productsToModify = products
        productsToModify.filter((p)=>(p.id === id))[0].qty = qty + 1
        dispatch(BasketAction.setBasketProducts(productsToModify))
    }

    const decrease = () => {
        if(qty === 1){
            const productsToSet = products.filter((p)=>(p.id !== id))
            dispatch(BasketAction.setBasketProducts(productsToSet))
        }
        else{
            let productsToModify = products
            productsToModify.filter((p)=>(p.id === id))[0].qty = qty - 1
            dispatch(BasketAction.setBasketProducts(productsToModify))
        }
    }

    return(
        <div>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <div className={'text-center'}>
                            <FaMinus size={20} className={'counter'} onClick={()=>decrease()}></FaMinus>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className={'fs16 primaryTextColor text-center'}>{qty}</div>
                    </Col>
                    <Col xs={4}>
                        <div className={'text-center'}>
                            <FaPlus size={20} className={'counter'} onClick={()=>increase()}></FaPlus>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Counter