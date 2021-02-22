import React from 'react'
import { useForm } from 'react-hook-form'

const AdminSettings = ({ currentAdmin, _handleAdminUpdate}) => {

    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            id: currentAdmin.id,
            email: currentAdmin.attributes.email
        }
    })


    return (
        <div>
            <form onSubmit={handleSubmit(_handleAdminUpdate)}>
                <label for='email'>Change Email to </label>
                <input type='text' name='email' ref={register} />
                <label for='password'>Change Password to</label>
                <input type='password' name='password' ref={register} />
                <input type='hidden' name='id' ref={register} />
                <button type='submit'>Submit</button>
                <button type='submit'>Cancel</button>
            </form>
        </div>
    )
}

export default AdminSettings;