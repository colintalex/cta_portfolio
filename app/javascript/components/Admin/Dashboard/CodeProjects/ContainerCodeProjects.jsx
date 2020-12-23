import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CodeProjectCreate from './CodeProjectCreate'
import CodeProjectList from './CodeProjectList'

const ContainerCodeProjects = () => {
    const [ codeProjects, setCodeProjects ] = useState([])
    const [ updated, setUpdated ] = useState(false)

    useEffect(() => {
        axios.get('/api/v1/code_projects')
        .then(data => {
            setCodeProjects(data.data.data)
        })
        .catch(error => console.log(error))
    },[updated])

    return (
        <div>
            <h3>Code Projects</h3>
            <CodeProjectList
                codeProjects={codeProjects}
                setUpdated={setUpdated}
            />
            <CodeProjectCreate
                setUpdated={setUpdated}
            />
        </div>
    )
}

export default ContainerCodeProjects