import React from 'react'
import styled from '@emotion/styled'
import {
    primaryColor,
    warningColor,
    dangerColor,
    defaultBgColor,
    black, white
} from '../constant/color'

function Button(props) {
    let bgColor, hoverColor, textColor;

    const padding = () => {
        switch(props.size) {
            case 'medium':
                return '12px 36px'
            case 'large':
                return '16px 40px'
            default:
                return '8px 32px'
        }
    }

    switch(props.type) {
        case 'primary':
            bgColor = primaryColor
            textColor = white
            break;
        case 'warning':
            bgColor = warningColor
            textColor = black
            break;
        case 'danger':
            bgColor = dangerColor
            textColor = white
            break;
        default:
            bgColor = defaultBgColor
            textColor = black
            break;
    }

    const Button = styled.button`
        padding: ${padding};
        border: none;
        border-radius: 4px;
        background-color: ${bgColor};
        color: ${textColor};
        font-size: ${props.fontSize};
        font-weight: bold;
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
        &:active {
            opacity: 0.5;
        }
    `

    return (
        <Button>
            {props.label}
        </Button>
    )
}

export default Button
