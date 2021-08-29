import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillLockFill } from 'react-icons/bs'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import BasketAction from '../../actions/basket'
import Products from './Products'
import Cost from './Cost'

const _Modal = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const storeBasket = useSelector(state => state.basket)

    return(
        <Modal 
            show={storeBasket.modalVisible} 
            onHide={() => dispatch(BasketAction.setBasketModalVisibleStatus(false))}
        >
            <Modal.Header>
                <Modal.Title className={'primaryTextColor'}>{localization.selectedProducts}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Products></Products>
                
            </Modal.Body>
            <Modal.Footer>
                { storeBasket.products.length === 0 ? null :(<Cost amount={storeBasket.totalCost}></Cost>) }
            </Modal.Footer>
        </Modal>
    )
}

export default _Modal