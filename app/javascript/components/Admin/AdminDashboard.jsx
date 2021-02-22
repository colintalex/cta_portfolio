import React, { useState, useEffect } from 'react'
import AdminLogin from './AdminLogin'
import MainDashboard from './Dashboard/MainDashboard'

const AdminDashboard = () => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(JSON.parse(sessionStorage.getItem('authenticated')) || false )
    const [ currentAdmin, setCurrentAdmin ] = useState(JSON.parse(sessionStorage.getItem('currentAdmin')) || {})

    if(isAuthenticated) {
        return (
            <MainDashboard
                currentAdmin={currentAdmin}
                setCurrentAdmin={setCurrentAdmin}
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