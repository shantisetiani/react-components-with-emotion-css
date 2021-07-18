import React from 'react'
import styled from '@emotion/styled'
import { vMargin, gutter, totalCol } from './Row'

function Col(props) {
    const maxWidth = '100%'
    const verticalMargin = vMargin ? `${vMargin}px` : 0
    const horizontalMargin = gutter ? `${gutter}px` : 0
    const width = () => {
        if(props.colspan){
            return (props.colspan / totalCol * 100) + '%'
        }
        return (1 / totalCol * 100) + '%'
    }

    const Col = styled.div`
        -webkit-box-flex: 0;
        position: relative;
        flex-basis: ${width()};
        width: ${width()};
        max-width: ${maxWidth};
        min-height: 1px;
        margin: ${verticalMargin} 0;
        text-align: ${props.align}
    `
    // padding: ${verticalMargin} ${horizontalMargin};
    
    return (
        <Col>
            {props.children}
        </Col>
    )
}

export default Col
