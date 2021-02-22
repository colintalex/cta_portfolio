import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const FullstackProjectCreate = ({ currentAdmin, setUpdated }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const _handleProjectCreate = (data) => {
        const imageData = new FormData();
        for( var name in data){
                if (name !== 'images'){
                    imageData.append(name, data[name])
                }
        }
        for(var img in data['images']){
                imageData.append('images[]', data['images'][img])

        }

        const config = {
            headers: {
                'content-type': `multipart/form-data; boundary=${imageData._boundary}`
            }
        }
        axios.post('/api/v1/fullstack_projects', imageData, config)
        .then(resp => {
            setUpdated(true)
            setUpdated(false)
            document.getElementById('fullstack-create-form').reset();
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            Create a new Fullstack project here
            <form id='fullstack-create-form' onSubmit={handleSubmit(_handleProjectCreate)} encType='multipart/form-data'>
                <input type='text' name='title' placeholder='Title' ref={register} />
                <input type='textarea' name='description' placeholder='Description' ref={register} />
                <input type='text' name='github_url' placeholder='GitHub URL' ref={register} />
                <input type='text' name='deploy_url' placeholder='Deployment URL' ref={register} />
                <input type='text' name='technology' placeholder='Technology' ref={register} />
                <input type='file' multiple name='images' placeholder='Images' ref={register} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FullstackProjectCreate