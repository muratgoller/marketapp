import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Counter from './Counter'
import Cost from './Cost'

const Products = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const storeBasketProducts = useSelector(state => state.basket.products)

    return(
        <div>
            { storeBasketProducts.length === 0 ? (localization.noProductsAdded):(
                <div>
                    <Container fluid>
                        { storeBasketProducts.map((p, index)=>(
                            <Row className={index === 0 ? 'mt5' : 'mt20'}>
                                <Col xs={6} md={8}> 
                                    <div>{p.name}</div>
                                    <div>
                                        <Cost amount={p.unitPrice * p.qty}></Cost>
                                    </div>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Counter id={p.id}></Counter>
                                </Col>
                            </Row>
                        )) }
                    </Container>
                </div>
            ) }
        </div>
    )
}

export default Products