import React, { useEffect, useState } from 'react'
import { FaLiraSign } from 'react-icons/fa'

const Cost = ({ amount, color }) => {

    return(
        <tr>
            <td>
                <FaLiraSign size={10} className={color === 'light' ? 'lightTextColor' : 'primaryTextColor'}></FaLiraSign>
            </td>
            <td>
                <span className={ (color === 'light' ? 'lightTextColor' : 'primaryTextColor') + ' fs16'}>{amount}</span>
            </td>
        </tr>
    )
}

export default Cost