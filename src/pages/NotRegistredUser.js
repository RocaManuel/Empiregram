import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegistredUser = () => {
    const { activateAuth } = useContext(Context)
    return (
        <Fragment>
            <RegisterMutation>
                {
                    (register, {data, loading, error}) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password }
                            const variables = { input }
                            register({ variables }).then(({data}) => {
                                const { signup } = data
                                activateAuth(signup)
                            })
                        }
                        const errMsg = error && 'User already exist or there is a problem'
                        return <UserForm error={errMsg} disabled={loading} title='Register' onSubmit={onSubmit} />
                    }
                }
            </RegisterMutation>
            <LoginMutation>
                {
                    (login, {data, loading, error}) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password }
                            const variables = { input }
                            login({ variables }).then(({data}) => {
                                const { login } = data
                                activateAuth(login)
                            })
                        }
                        const errMsg = error && 'Credentials Error'
                        return <UserForm error={errMsg} disabled={loading} title='Login' onSubmit={onSubmit} />
                    }
                }
            </LoginMutation>  
        </Fragment>
    )
}