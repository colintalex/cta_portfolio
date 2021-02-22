import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const ApiProjectCreate = ({ setUpdated }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const _handleProjectCreate = (data, e) => {
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
        axios.post('/api/v1/api_projects', imageData, config)
        .then(resp => {
            setUpdated(true)
            setUpdated(false)
            e.target.reset()
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            Create a new API project here
            <form onSubmit={handleSubmit(_handleProjectCreate)}>
                <input type='text' name='title' placeholder='Title' ref={register} />
                <input type='textarea' name='description' placeholder='Description' ref={register} />
                <input type='text' name='github_url' placeholder='GitHub URL' ref={register} />
                <input type='text' name='deploy_url' placeholder='Deployment URL' ref={register} />
                <input type='text' name='technology' placeholder='Technology' ref={register} />
                <input type='file' multiple name='images' placeholder='Images' ref={register} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default ApiProjectCreate