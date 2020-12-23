import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CodeProjectModule = ({ activeTab }) => {
    const [codeProjects, setCodeProjects] = useState([]);

    useEffect (() => {
        axios.get('/api/v1/code_projects')
        .then(data => {
            setCodeProjects(data.data.data)
        })
        .catch(error => console.log(error))

    },[])

    const codeProjectItems = codeProjects.map(item => {
        var proj = item.attributes
        return (
            <div>
                Title: {proj.title},
                Desc: {proj.description} <br/>
                Images: {proj.images && proj.images.map(img => <img src={img} height='150' width='150'/>)}
            </div>
        )
    })

    return (
        <div
            style={{display: (activeTab == 'tab-code-projects') ? 'block' : 'none'}}
        >
            Code project module
            {codeProjectItems}
        </div>
    )
}

export default CodeProjectModule