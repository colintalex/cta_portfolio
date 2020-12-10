import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CodeProjectCreate from './CodeProjectCreate'
import CodeProjectList from './CodeProjectList'

const ContainerCodeProjects = () => {
    const [ codeProjects, setCodeProjects ] = useState([])

    useEffect(() => {
        axios.get('/api/v1/code_projects')
        .then(data => {
            setCodeProjects(data.data.data)
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <CodeProjectList
                codeProjects={codeProjects}
            />
            <CodeProjectCreate/>
        </div>
    )
}

export default ContainerCodeProjects