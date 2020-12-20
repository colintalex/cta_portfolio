import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const GraphicProjectCreate = ({ currentAdmin, setUpdated }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const _handleProjectCreate = (data) => {
        const imageData = new FormData();
        imageData.append('images', data.images[0])
        const json = JSON.stringify(data)
        const blob = new Blob([json], {
            type: 'application/json'
        });
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        imageData.append('data', blob)
        axios.post('/api/v1/graphic_projects', data => {body => imageData, params => data}, config)
        .then(resp => {
            setUpdated(true)
            setUpdated(false)
            e.target.reset()
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            Create a new graphic project here
            <form onSubmit={handleSubmit(_handleProjectCreate)} encType='multipart/form-data'>
                <input type='text' name='title' placeholder='Title' ref={register} />
                <input type='text' name='description' placeholder='Description' ref={register} />
                <input type='text' name='image_path' placeholder='Image Path' ref={register} />
                <input type='file' name='images' placeholder='Images' ref={register} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default GraphicProjectCreate