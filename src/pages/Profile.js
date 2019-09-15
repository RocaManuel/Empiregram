import React, { useContext, Fragment } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const Profile = () => {
    const { removeAuth } = useContext(Context)
    return (
        <Fragment>
            <SubmitButton onClick={removeAuth}> LOG OUT </SubmitButton>
        </Fragment>
    )
}