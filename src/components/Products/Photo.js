import React from 'react'

const Photo = ({ size }) => {
    return(
        size === null ? null : (
            <img 
                className={'mb10 mt10'}
                src={'https://picsum.photos/' + size + '?sig=' + Math.floor(Math.random() * 1000)}
            ></img>
        )
    )
}

export default Photo