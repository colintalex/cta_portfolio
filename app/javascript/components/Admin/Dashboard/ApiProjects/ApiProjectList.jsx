import React, { useState } from 'react'
import axios from 'axios'
import ApiEditForm from './ApiEditForm'

const ApiProjectList = ({ apiProjects, setUpdated }) => {
    const [ editMode, setEditMode ] = useState(false)
    const [ currentApiProject, setCurrentApiProject ] = useState({})

    const _handleProjectDelete = (data) => {
        axios.delete(`/api/v1/api_projects/${parseInt(data)}`)
        .then(data => {
            setUpdated(true)
            setUpdated(false)
        })
        .catch(error => console.log(error))
    }

    const _handleProjectUpdate = (data) => {
        axios.put(`/api/v1/api_projects/${parseInt(data.id)}`, data)
        .then(resp => {
            setUpdated(true)
            setUpdated(false)
            setEditMode(false)
        })
        .catch(error => console.log(error))
    }

    const listapiProjects = apiProjects.map(item => {
        var proj = item.attributes
        return (
            <div key={item.id} >
                Title: {proj.title},
                Desc: {proj.description},
                GitHub: {proj.github_url},
                Deployment: {proj.deploy_url},
                Technology: {proj.technology} <br/>
                Image: {
                    proj.images && proj.images.map(img => <img src={img.url} key={img.id} height='150' width='150'/>)
                } <br/>
                <button type='submit' onClick={e => {
                    setEditMode(true)
                    setCurrentApiProject(item)
                    }}
                >Edit</button>
                <button type='submit' onClick={e => _handleProjectDelete(item.id)}>Delete</button>
            </div>
        )
    })  

    return (
        <div>
            {listapiProjects}
            { editMode &&
                <ApiEditForm
                currentApiProject={currentApiProject}
                setEditMode={setEditMode}
                _handleProjectUpdate={_handleProjectUpdate}
                />
            }
        </div>
    )
}

export default ApiProjectList