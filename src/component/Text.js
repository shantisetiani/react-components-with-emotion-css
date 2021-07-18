import React from 'react'
import styled from '@emotion/styled'

const Heading = (props) => {
    const CustomH = `h${props.h}`
    const Heading = styled(CustomH)`
        text-align: ${props.align};
        color: ${props.color};
        margin: ${props.noMargin && 0}
    `

    return (
        <Heading style={props.style}>{props.children}</Heading>
    )
}

const Paragraph = (props) => {
    const Paragraph = styled.p`
        text-align: ${props.align};
        color: ${props.color};
        font-weight: ${props.weight};
    `

    return (
        <Paragraph style={props.style}>{props.children}</Paragraph>
    )
}

const Span = (props) => {
    const Span = styled.span`
        text-align: ${props.align};
        color: ${props.color};
        font-weight: ${props.weight};
    `

    return (
        <Span style={props.style}>{props.children}</Span>
    )
}

const Link = (props) => {
    const Link = styled.a`
        text-align: ${props.align};
        color: ${props.color};
        font-weight: ${props.weight};
        cursor: ${props.onClick && 'pointer'}
    `

    return (
        <Link href={props.href} onClick={props.onClick} style={props.style}>{props.children}</Link>
    )
}

const Text = {
    Heading,
    Paragraph,
    Span,
    Link
}

export default Text
