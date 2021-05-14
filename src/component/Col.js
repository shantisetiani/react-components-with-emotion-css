import React from 'react'
import styled from '@emotion/styled'
import { vMargin, gutter } from './Row'

function Col(props) {
    const maxWidth = '100%'
    const verticalMargin = vMargin ? `${vMargin}px` : 0
    const horizontalMargin = gutter ? `${gutter}px` : 0

    const Col = styled.div`
        -webkit-box-flex: 0;
        position: relative;
        flex-basis: 0;
        width: 100%;
        max-width: ${maxWidth};
        min-height: 1px;
        margin: ${verticalMargin} ${horizontalMargin};
    `
    
    return (
        <Col>
            {props.children}
        </Col>
    )
}

export default Col
