import React from 'react'
import ContainerApiProjects from './ApiProjects/ContainerApiProjects'
import ContainerGraphicProjects from './GraphicProjects/ContainerGraphicProjects'

const MainDashboard = ({ currentAdmin }) => {

    return (
        <div>
            <h4>Main Dashboard</h4>
            <hr/>
            <ContainerApiProjects
                currentAdmin={currentAdmin}
            /> <hr/>
            <ContainerGraphicProjects
                currentAdmin={currentAdmin}
            />
        </div>
    )
}

export default MainDashboard