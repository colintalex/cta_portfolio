import React from 'react'
import ContainerApiProjects from './ApiProjects/ContainerApiProjects'
import ContainerFullstackProjects from './FullstackProjects/ContainerFullstackProjects'

const MainDashboard = ({ currentAdmin }) => {

    return (
        <div>
            <h4>Main Dashboard</h4>
            <hr/>
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