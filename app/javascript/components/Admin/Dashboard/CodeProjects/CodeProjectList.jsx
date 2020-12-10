import React from 'react'

const CodeProjectList = ({ codeProjects }) => {

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