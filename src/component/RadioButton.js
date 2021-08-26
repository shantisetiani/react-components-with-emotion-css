import React from 'react'
// import styled from '@emotion/styled'
import styled from "@emotion/styled/macro"

function RadioButton(props) {
    const Container = styled.div`
        display: flex;

        label {
            cursor: pointer
        }
    `

    const Checkmark = styled.label`
        position: relative;
        height: 16px;
        align-self: center;
        width: 16px;
        background-color: #fff;
        border: 1px solid #333;
        border-radius: 50%;

        &:after {
            content: '';
            position: absolute;
            display: none;
            top: 3px;
            left: 3px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
    `

    const Radio = styled.input[type='radio']`
        position: absolute;
        opacity: 0;
        cursor: pointer;

        &:checked ~ ${Checkmark} {
            background-color: #fff;

            &:after {
                display: block;
                background-color: #333;
            }
        }
    `

    const handleOnChange = (value) => {
        if (props.onChange) {
          props.onChange(value)
        }
    }

    return (
        <div>
            {props.list.map((item, i) => (
                <div key={i}>
                    {i > 0 && <Divider />}
                    <Container>
                        <Radio
                            // type='radio'
                            name={props.name}
                            id={item.id}
                            value={item.value}
                            onChange={({ target }) => handleOnChange(target.value)}
                        ></Radio>
                        <Checkmark htmlFor={item.id}></Checkmark>
                        <div className='px-12 py-12'>
                            <Text.Paragraph className='flex-1' size={14} weight='bold'>
                                <label htmlFor={item.id}>{item.label}</label>
                            </Text.Paragraph>
                            {item.description && 
                                <Text.Paragraph className='flex-1' size={12} color='gray-3'>
                                    <label htmlFor={item.id}>{item.description}</label>
                                </Text.Paragraph>
                            }
                        </div>
                    </Container>
                </div>
            ))}
        </div>
    )
}

export default RadioButton
