import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CodeProjectModule = () => {
    const [codeProjects, setCodeProjects] = useState([]);

    useEffect (() => {
        axios.get('/api/v1/code_projects')
        .then(data => {
            setCodeProjects(data.data.data)
        })
        .catch(error => console.log(error))

    },[])

    const codeProjectItems = codeProjects.map(item => {
        return (
            <div>
                Title: {item.attributes.title},
                Desc: {item.attributes.description}
            </div>
        )
    })

    return (
        <div>
            Code project module
            {codeProjectItems}
        </div>
    )
}

export default CodeProjectModule