import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminLogin from './AdminLogin'
import MainDashboard from './Dashboard/MainDashboard'

const AdminDashboard = () => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(JSON.parse(sessionStorage.getItem('authenticated')) || false )
    const [ currentAdmin, setCurrentAdmin ] = useState(JSON.parse(sessionStorage.getItem('currentAdmin')) || {})

    const _handleAdminUpdate = (data) => {
        axios.put(`/api/v1/admin/${currentAdmin.id}`, data)
        .then(resp => {
            setCurrentAdmin(resp.data.data)
        })
        .catch(error => console.log(error))
    }
    if(isAuthenticated) {
        return (
            <MainDashboard
                currentAdmin={currentAdmin}
                _handleAdminUpdate={_handleAdminUpdate}
            />
        )
    }else{
        return (
            <AdminLogin
                setIsAuthenticated={setIsAuthenticated}
                setCurrentAdmin={setCurrentAdmin}
            />
        )
    }
}

export default AdminDashboard