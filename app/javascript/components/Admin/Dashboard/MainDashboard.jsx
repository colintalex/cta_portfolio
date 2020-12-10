import React from 'react'
import ContainerCodeProjects from './CodeProjects/ContainerCodeProjects'
import ContainerGraphicProjects from './GraphicProjects/ContainerGraphicProjects'

const MainDashboard = () => {

    return (
        <div>
            <h4>Main Dashboard</h4>
            <ContainerCodeProjects/>
            <ContainerGraphicProjects/>
        </div>
    )
}

export default MainDashboard