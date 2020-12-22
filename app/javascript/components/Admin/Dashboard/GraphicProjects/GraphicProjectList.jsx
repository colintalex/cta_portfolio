import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import GraphicEditForm from './GraphicEditForm'

const GraphicProjectList = ({ graphicProjects, setUpdated }) => {
    const [ editMode, setEditMode ] = useState(false)
    const [ currentGraphicProject, setCurrentGraphicProject ] = useState({})

    const _handleProjectDelete = (data) => {
        axios.delete(`/api/v1/graphic_projects/${parseInt(data)}`)
        .then(data => {
            setUpdated(true)
            setUpdated(false)
        })
        .catch(error => console.log(error))
    }

    const _handleProjectUpdate = (data) => {
        axios.put(`/api/v1/graphic_projects/${parseInt(data.id)}`, { data })
        .then(resp => {
            setUpdated(true)
            setUpdated(false)
            setEditMode(false)
        })
        .catch(error => console.log(error))
    }



    const listGraphicProjects = graphicProjects && graphicProjects.map(item => {
            var proj = item.attributes
            return (
                <div key={item.id} >
                    Title: {proj.title},
                    Desc: {proj.description},
                    Images:  <img src={`http://localhost:3000${proj.images[0]}`} height='200' width='200'/>
                        )
                    <button type='submit' onClick={e => {
                        setEditMode(true)
                        setCurrentGraphicProject(item)
                        }}
                    >Edit</button>
                    <button type='submit' onClick={e => _handleProjectDelete(item.id)}>Delete</button>
                </div>
            )
        })  

    return (
        <div>
            List of graphic projects
            {listGraphicProjects}
            { editMode &&
                <GraphicEditForm 
                    currentGraphicProject={currentGraphicProject}
                    setEditMode={setEditMode}
                    _handleProjectUpdate={_handleProjectUpdate}
                />
            }
        </div>
    )
}

export default GraphicProjectList