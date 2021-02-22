import React from 'react'
import AdminSettings from './AdminSettings'
import ContainerApiProjects from './ApiProjects/ContainerApiProjects'
import ContainerFullstackProjects from './FullstackProjects/ContainerFullstackProjects'

const MainDashboard = ({ currentAdmin, _handleAdminUpdate }) => {

    return (
        <div>
            <h2>Main Dashboard</h2>
            <h4>Welcome {currentAdmin && currentAdmin.attributes.name}!</h4>
            <h4>{currentAdmin && currentAdmin.attributes.email}</h4>
            <hr/>
            <AdminSettings
                currentAdmin={currentAdmin}
                _handleAdminUpdate={_handleAdminUpdate}
            />
            <ContainerApiProjects
                currentAdmin={currentAdmin}
            /> <hr/>
            <ContainerFullstackProjects
                currentAdmin={currentAdmin}
            />
        </div>
    )
}

export default MainDashboard