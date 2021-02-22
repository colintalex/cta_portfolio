import React from 'react'
import AdminSettings from './AdminSettings'
import ContainerApiProjects from './ApiProjects/ContainerApiProjects'
import ContainerFullstackProjects from './FullstackProjects/ContainerFullstackProjects'

const MainDashboard = ({ currentAdmin, setCurrentAdmin }) => {

    return (
        <div>
            <h2>Main Dashboard</h2>
            <hr/>
            <AdminSettings
                currentAdmin={currentAdmin, setCurrentAdmin}
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