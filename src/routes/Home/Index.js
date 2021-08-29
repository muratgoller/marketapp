import React, { useEffect, useState } from 'react'
import Sorting from '../../components/Sorting/Index'
import Brands from '../../components/Brands/Index'
import Tags from '../../components/Tags/Index'
import Products from '../../components/Products/Index'
import { Container, Row, Col } from 'react-bootstrap'
import BasketModal from '../../components/Basket/_Modal'

const Index = () => {
    return(
        <Container fluid>
            <Row>
                <Col md={3} lg={4} xl={3}>
                    <Sorting></Sorting>
                    <Brands></Brands>
                    <Tags></Tags>
                </Col>
                <Col xs={12} sm={12} md={9} lg={8} xl={9}>
                    <Products></Products>
                </Col>
            </Row>
            <BasketModal></BasketModal>
        </Container>
    )
}

export default Index