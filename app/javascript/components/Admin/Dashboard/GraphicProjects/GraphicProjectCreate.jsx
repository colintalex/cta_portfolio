import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const GraphicProjectCreate = ({ currentAdmin, setUpdated }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const _handleProjectCreate = (data) => {
        const imageData = new FormData();
        for( var name in data){
            if(name === 'images'){
                imageData.append('images', data['images'][0])
            }else {
                imageData.append(name, data[name])
            }
        }

        const config = {
            headers: {
                'content-type': `multipart/form-data; boundary=${imageData._boundary}`
            }
        }
        axios.post('/api/v1/graphic_projects', imageData, config)
        .then(resp => {
            setUpdated(true)
            setUpdated(false)
            data.target.reset()
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            Create a new graphic project here
            <form onSubmit={handleSubmit(_handleProjectCreate)} encType='multipart/form-data'>
                <input type='text' name='title' placeholder='Title' ref={register} />
                <input type='text' name='description' placeholder='Description' ref={register} />
                <input type='file' name='images' placeholder='Images' ref={register} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default GraphicProjectCreate