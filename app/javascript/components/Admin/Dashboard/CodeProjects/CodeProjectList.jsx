import React from 'react'
import axios from 'axios'

const CodeProjectList = ({ codeProjects, setUpdated }) => {

    const _handleProjectDelete = (data) => {
        axios.delete(`/api/v1/code_projects/${parseInt(data)}`)
        .then(data => {
            setUpdated(true)
            setUpdated(false)
        })
        .catch(error => console.log(error))
    }

    const listCodeProjects = codeProjects.map(item => {
        var proj = item.attributes
        return (
            <div key={item.id} >
                Title: {proj.title},
                Desc: {proj.description},
                GitHub: {proj.github_url},
                Deployment: {proj.deploy_url},
                Image: {proj.image_path},
                Technology: {proj.technology}
                <button type='submit' onClick={e => _handleProjectDelete(item.id)}>Delete</button>
            </div>
        )
    })  

    return (
        <div>
            List of code projects
            {listCodeProjects}
        </div>
    )
}

export default CodeProjectList