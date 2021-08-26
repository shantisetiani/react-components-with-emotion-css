import React from 'react'
import styled from '@emotion/styled'

function Divider(props) {
    const Divider = styled.div`
        height: ${props.horizontal ? '1px' : '100%'};
        width: ${props.horizontal ? '100%' : '1px'};
        margin: ${props.margin} 0;
        background-color: ${props.color};
    `

    return (
        <Divider />
    )
}

export default Divider
