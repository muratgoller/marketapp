import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pagination } from '@material-ui/lab'
import { usePagination } from '@material-ui/lab/Pagination'
import ProductsAction from '../../actions/products'
import { isMobile, isTablet } from 'react-device-detect'

const Page = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const grid = useSelector(state => state.products.grid)

    const handlePageChange = (pageNo) => {
        if(pageNo !== grid.activePageNumber){
            dispatch(ProductsAction.setProductsGridActivePageNumber(pageNo))
        }
    }

    return(
        grid.pagesCount > 1 ? (
            <div className={'alignHCenter mt20 mb20'}>
                <Pagination 
                    pageNumber={grid.activePageNumber}
                    count={grid.pagesCount} 
                    showFirstButton={!(isMobile || isTablet)}
                    showLastButton={!(isMobile || isTablet)}
                    size={isMobile || isTablet ? 'small' : 'large'}
                    color={'standard'}
                    onChange={(e, pageNo) => handlePageChange(pageNo)}
                    siblingCount={isMobile || isTablet ? 1 : 2}
                />
            </div>
        ) : null
    )
}

export default Page