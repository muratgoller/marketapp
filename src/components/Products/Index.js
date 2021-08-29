import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Redirect } from 'react-router-dom'
import { render } from 'react-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { getItems } from '../../business/api'
import Item from './Item'
import Page from './Page'
import ProductsAction from '../../actions/products'
import { sortTypes } from '../../constants/sort'
import Types from './Types'

const Index = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const storeProducts = useSelector(state => state.products)
    const storeCompany = useSelector(state => state.company)
    const storeTag = useSelector(state => state.tag)
    const storeSorting = useSelector(state => state.sorting)

    const [products, setProducts] = useState([])

    useEffect(() => {
        getItems().then((resp)=>(
            dispatch(ProductsAction.setProductsAll(resp))
        ))
    }, [])

    useEffect(() => {
        if(storeProducts.data !== null){
            let resp = storeProducts.data
            resp = applyTypeFilter(resp)
            resp = applyCompanyFilter(resp)
            resp = applyTagFilter(resp)
            resp = applySort(resp)

            const count = resp.length
            const pagesCount = Math.floor(count / storeProducts.grid.itemsPerPage) + 1

            if(pagesCount !== storeProducts.grid.pagesCount){
                dispatch(ProductsAction.setProductsGridPageCount(pagesCount))
            }

            const { activePageNumber, itemsPerPage } = storeProducts.grid
            setProducts(resp.slice((activePageNumber - 1) * itemsPerPage, activePageNumber * itemsPerPage))
        }
    }, [storeProducts.selectedType, storeProducts.grid.activePageNumber, storeProducts.grid.toggleRefresh, storeProducts.data])

    const applyTypeFilter = (list) => {
        return list.filter((l)=>(l.itemType === storeProducts.selectedType))
    }

    const applyCompanyFilter = (list) => {
        let result = []

        if(storeCompany.allChecked){
            result = list
        }
        else{
            Object.keys(storeCompany.data).map((key)=>{
                if(storeCompany.data[key].checked){
                    result.push(...list.filter((l)=>(l.manufacturer === key)))
                }
            })
        }

        return result
    }

    const applyTagFilter = (list) => {
        let result = []

        if(storeTag.allChecked){
            result = list
        }
        else{
            Object.keys(storeTag.data).map((key)=>{
                if(storeTag.data[key].checked){
                    result.push(...list.filter((l)=>(l.tags.filter((t)=>(t === key)).length > 0)))
                }
            })
        }

        return result
    }

    const applySort = (list) => {
        if(storeSorting.type === sortTypes.priceAsc){
            return list.sort((a, b) => a.price - b.price)
        }
        else if(storeSorting.type === sortTypes.priceDesc){
            return list.sort((a, b) => b.price - a.price)
        }
        else if(storeSorting.type === sortTypes.dateAsc){
            return list.sort((a, b) => a.added - b.added)
        }
        else if(storeSorting.type === sortTypes.dateDesc){
            return list.sort((a, b) => b.added - a.added)
        }
    }

    return(
        <div>
            <div className={'mt10'}>
                <span>{localization.products}</span>
            </div>
            <div>
                <Types></Types>
            </div>
            <div className={'mt10 containerBG'}>
                <Container>
                    <div>
                        { products.map((p, index)=>(
                            index % 4 === 0 ? (
                                <Row>
                                    { products.slice(index, index + 4).map((p)=>(
                                        <Col sm={3} md={3}>
                                            <div>
                                                <Item id={p.slug} name={p.name} price={p.price}></Item>
                                            </div>
                                        </Col>
                                    )) }
                                </Row>
                            ) : (null)
                        )) }
                    </div>
                    <div>
                        <Page></Page>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Index