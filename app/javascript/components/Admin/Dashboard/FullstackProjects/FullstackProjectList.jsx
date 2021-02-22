import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import FullstackEditForm from './FullstackEditForm'

const FullstackProjectList = ({ fullstackProjects, setUpdated }) => {
    const [ editMode, setEditMode ] = useState(false)
    const [ currentFullstackProject, setCurrentFullstackProject ] = useState({})

    const _handleProjectDelete = (data) => {
        axios.delete(`/api/v1/fullstack_projects/${parseInt(data)}`)
        .then(data => {
            setUpdated(true)
            setUpdated(false)
            setEditMode(false)
        })
        .catch(error => console.log(error))
    }

    const _handleProjectUpdate = (data) => {
        axios.put(`/api/v1/fullstack_projects/${parseInt(data.id)}`, data)
        .then(resp => {
            setUpdated(true)
            setUpdated(false)
            setEditMode(false)
        })
        .catch(error => console.log(error))
    }


    const listfullstackProjects = fullstackProjects && fullstackProjects.map(item => {
            var proj = item.attributes
            return (
                <div key={item.id} >
                    Title: {proj.title},
                    Desc: {proj.description},
                    GitHub: {proj.github_url},
                    Deployment: {proj.deploy_url},
                    Technology: {proj.technology},
                    Challenges: {proj.challenges && proj.challenges.join(', ')} <br/>
                    Images: {
                        proj.images && proj.images.map(img => <img src={img.url} key={img.id} height='150' width='150'/>) // Add keys!!
                    } <br/>
                    <button type='submit' onClick={e => {
                        setEditMode(true)
                        setCurrentFullstackProject(item)
                        }}
                    >Edit</button>
                    <button type='submit' onClick={e => _handleProjectDelete(item.id)}>Delete</button>
                </div>
            )
        })  

    return (
        <div>
            {listfullstackProjects}
            { editMode &&
                <FullstackEditForm 
                    currentFullstackProject={currentFullstackProject}
                    setEditMode={setEditMode}
                    _handleProjectUpdate={_handleProjectUpdate}
                />
            }
        </div>
    )
}

export default FullstackProjectList