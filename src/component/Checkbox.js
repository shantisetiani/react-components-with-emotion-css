/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled/macro";
import {
    primaryColor,
    primaryColorHover,
    black,
    white,
} from '../constant/color'

function Checkbox(props) {
    const Checkmark = styled.span`
        position: absolute;
        top: 1px;
        left: 0;
        height: 15px;
        width: 15px;
        border-radius: 4px;
        background-color: ${white};
        border: 1px solid ${black};

        &:after {
            content: "";
            position: absolute;
            display: none;
        }
    `

    const Label = styled.label`
        display: block;
        position: relative;
        padding-left: 25px;
        margin-bottom: 10px;
        cursor: pointer;
        font-size: 18px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        
        input {
            display: none;
        }

        ${Checkmark} {
            &:after {
                top: 0;
                left: 4px;
                width: 6px;
                height: 9px;
                border: solid ${white};
                border-width: 0 1px 1px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }

        &:hover input ~ ${Checkmark} {
            background-color: ${primaryColorHover};
        }

        input:checked ~ ${Checkmark} {
            background-color: ${primaryColor};
            border: 1px solid ${black};

            &:after {
                display: block;
            }
        }
    `

    const onChange = (isChecked) => {
        props.onChange && props.onChange(isChecked)
    }

    return (
        <Label>
            {props.content}
            <input
                type='checkbox'
                onChange={event => onChange(event.target.checked)}
                checked={props.checked}
            />
            <Checkmark />
        </Label>
    )
}

export default Checkbox
