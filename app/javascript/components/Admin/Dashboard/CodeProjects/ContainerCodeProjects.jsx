import React from 'react'
import CodeProjectCreate from './CodeProjectCreate'
import CodeProjectList from './CodeProjectList'

const ContainerCodeProjects = () => {

    return (
        <div>
            <CodeProjectList/>
            <CodeProjectCreate/>
        </div>
    )
}

export default ContainerCodeProjects