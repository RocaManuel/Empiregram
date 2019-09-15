import React, { Fragment } from 'react'
import { useInputValue} from '../../hooks/useInputValue'
import { Button, Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ 
            email: email.value, 
            password: password.value 
        })
    }

    return (
        <Fragment>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder='Email' type='email' {...email}></Input>
                <Input disabled={disabled} placeholder='Password' type='password' {...password}></Input>
                <SubmitButton disabled={disabled}> {title} </SubmitButton>
            </Form>
            {error && <Error>{error}</Error>}
        </Fragment>
    )
}