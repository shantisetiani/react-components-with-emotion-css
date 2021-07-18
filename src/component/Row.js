import React from 'react'
import styled from '@emotion/styled'

export let vMargin, gutter, totalCol;

export function Row(props) {
    const Row = styled.div`
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: ${props.align ? props.align : 'normal'};
    `
    
    vMargin = props.vMargin
    gutter = props.gutter
    totalCol = props.totalCol ? props.totalCol : 6

    return (
        <Row>
            {props.children}
        </Row>
    )
}

export default Row
