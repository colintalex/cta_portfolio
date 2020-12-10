import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GraphicProjectList = ({ graphicProjects, setUpdated }) => {

    const _handleProjectDelete = (data) => {
        axios.delete(`/api/v1/graphic_projects/${parseInt(data)}`)
        .then(data => {
            setUpdated(true)
            setUpdated(false)
        })
        .catch(error => console.log(error))
    }

    const listGraphicProjects = graphicProjects.map(item => {
        var proj = item.attributes
        return (
            <div key={item.id} >
                Title: {proj.title},
                Desc: {proj.description},
                Image: {proj.image_path}
                <button type='submit' onClick={e => _handleProjectDelete(item.id)}>Delete</button>
            </div>
        )
    })  

    return (
        <div>
            List of graphic projects
            {listGraphicProjects}
        </div>
    )
}

export default GraphicProjectList