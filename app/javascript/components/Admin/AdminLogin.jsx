import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const AdminLogin = ({ setIsAuthenticated, setCurrentAdmin }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const _handleAdminLogin = (data) => {
        axios.post('/api/v1/admin/login', {
            email: data.email,
            password: data.password
        })
        .then(data => {
            setCurrentAdmin(data.data.admin)
            setIsAuthenticated(true)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            Login here
            <form onSubmit={handleSubmit(_handleAdminLogin)}>
                <input type='text' name='email' ref={register} placeholder='Email' />
                <input type='password' name='password' ref={register} placeholder='Password'/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AdminLogin