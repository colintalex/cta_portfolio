import React, { useState, useEffect } from 'react'
import AdminLogin from './AdminLogin'

const AdminDashboard = () => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    const [ currentAdmin, setCurrentAdmin ] = useState({})

    if(isAuthenticated) {
        return (
            <div>
                Admin Dashbord | 
                Welcome, {currentAdmin.name}!
            </div>
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