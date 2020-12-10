import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GraphicProjectCreate from './GraphicProjectCreate'
import GraphicProjectList from './GraphicProjectList'

const ContainerGraphicProjects = ({ currentAdmin }) => {
    const [ graphicProjects, setGraphicProjects ] = useState([])
    const [ updated, setUpdated ] = useState(false)

    useEffect(() => {
        axios.get('/api/v1/graphic_projects')
        .then(data => {
            setGraphicProjects(data.data.data)
        })
        .catch(error => console.log(error))
    },[updated])

    return (
        <div>
            <GraphicProjectList
                graphicProjects={graphicProjects}
                setUpdated={setUpdated}
            />
            <GraphicProjectCreate
                currentAdmin={currentAdmin}
                setUpdated={setUpdated}
            />
        </div>
    )
}

export default ContainerGraphicProjects