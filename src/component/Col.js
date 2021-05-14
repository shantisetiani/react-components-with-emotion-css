import React from 'react'
import styled from '@emotion/styled'

function Col(props) {
    const Col = styled.div`
        -webkit-box-flex: 0;
        position: relative;
        flex-basis: 0;
        flex-grow: 1;
        width: 100%;
        min-height: 1px;
    `
    return (
        <Col>
            {props.children}
        </Col>
    )
}

export default Col
