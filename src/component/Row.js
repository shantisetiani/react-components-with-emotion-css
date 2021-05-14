import React from 'react'
import styled from '@emotion/styled'

function Row(props) {
    const Row = styled.div`
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        justify-content: ${props.align ? props.align : 'normal'}
    `
    return (
        <Row>
            {props.children}
        </Row>
    )
}

export default Row
