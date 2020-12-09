import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminLogin from './AdminLogin'

const AdminDashboard = () => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)

    if(isAuthenticated) {
        return (
            <div>
                Admin Dashbord
            </div>
        )
    }else{
        return (
            <AdminLogin/>
        )
    }
}

export default AdminDashboard