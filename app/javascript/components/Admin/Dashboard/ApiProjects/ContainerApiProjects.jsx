import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ApiProjectCreate from './ApiProjectCreate'
import ApiProjectList from './ApiProjectList'

const ContainerApiProjects = () => {
    const [ apiProjects, setApiProjects ] = useState([])
    const [ updated, setUpdated ] = useState(false)

    useEffect(() => {
        axios.get('/api/v1/api_projects')
        .then(data => {
            setApiProjects(data.data.data)
        })
        .catch(error => console.log(error))
    },[updated])

    return (
        <div>
            <h3>Api Projects</h3>
            <ApiProjectCreate
                setUpdated={setUpdated}
            />
            <ApiProjectList
                apiProjects={apiProjects}
                setUpdated={setUpdated}
            />
        </div>
    )
}

export default ContainerApiProjects