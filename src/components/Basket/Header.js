import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillLockFill } from 'react-icons/bs'
import BasketAction from '../../actions/basket'
import Cost from './Cost'
import { isMobile, isTablet } from 'react-device-detect'

const Header = () => {
    const dispatch = useDispatch()
    const localization = useSelector(state => state.localization)
    const totalCost = useSelector(state => state.basket.totalCost)

    return(
        <div 
            className={'basketHeaderContainer justify-content-center'}
            onClick={()=>dispatch(BasketAction.setBasketModalVisibleStatus(true))}
        >
            <div>
                <table className={isMobile ? 'w75p' : 'w100p'}>
                    <tr>
                        <td className={'textEnd w-25'}>
                            <BsFillLockFill size={15} color={'white'}></BsFillLockFill>
                        </td>
                        <td className={'text-center w-75'}>
                            <span>
                                <Cost amount={totalCost} color={'light'}></Cost>
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Header