import React from 'react'
import ContainerCodeProjects from './CodeProjects/ContainerCodeProjects'
import ContainerGraphicProjects from './GraphicProjects/ContainerGraphicProjects'

const MainDashboard = ({ currentAdmin }) => {

    return (
        <div>
            <h4>Main Dashboard</h4>
            <hr/>
            <ContainerCodeProjects
                currentAdmin={currentAdmin}
            /> <hr/>
            <ContainerGraphicProjects
                currentAdmin={currentAdmin}
            />
        </div>
    )
}

export default MainDashboard