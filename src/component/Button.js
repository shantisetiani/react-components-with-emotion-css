import React from 'react'
import styled from '@emotion/styled'
import { defaultBgColor } from '../constant/color'

function Button(props) {
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

    const Button = styled.button`
      padding: ${padding};
      border: none;
      border-radius: 4px;
      background-color: ${props.bgColor ? props.bgColor : defaultBgColor};
      color: ${props.textColor ? props.textColor : 'black'};
      font-size: ${props.fontSize};
      font-weight: bold;
      &:hover {
        color: white;
      }
    `

    return (
        <Button>
            {props.label}
        </Button>
    )
}

export default Button
