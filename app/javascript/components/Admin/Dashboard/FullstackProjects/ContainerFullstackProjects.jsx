import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FullstackProjectCreate from './FullstackProjectCreate'
import FullstackProjectList from './FullstackProjectList'

const ContainerFullstackProjects = ({ currentAdmin }) => {
    const [ fullstackProjects, setFullstackProjects ] = useState([])
    const [ updated, setUpdated ] = useState(false)

    useEffect(() => {
        axios.get('/api/v1/fullstack_projects')
        .then(data => {
            setFullstackProjects(data.data.data)
        })
        .catch(error => console.log(error))
    },[updated])

    return (
        <div>
            <h3>Fullstack Projects</h3>
            <FullstackProjectCreate
                currentAdmin={currentAdmin}
                setUpdated={setUpdated}
            />
            <FullstackProjectList
                fullstackProjects={fullstackProjects}
                setUpdated={setUpdated}
            />
        </div>
    )
}

export default ContainerFullstackProjects