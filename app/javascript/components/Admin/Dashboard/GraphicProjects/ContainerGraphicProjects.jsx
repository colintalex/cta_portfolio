import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GraphicProjectCreate from './GraphicProjectCreate'
import GraphicProjectList from './GraphicProjectList'

const ContainerGraphicProjects = () => {
    const [ graphicProjects, setGraphicProjects ] = useState([])

    useEffect(() => {
        axios.get('/api/v1/graphic_projects')
        .then(data => {
            setGraphicProjects(data.data.data)
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <GraphicProjectList
                graphicProjects={graphicProjects}
            />
            <GraphicProjectCreate/>
        </div>
    )
}

export default ContainerGraphicProjects