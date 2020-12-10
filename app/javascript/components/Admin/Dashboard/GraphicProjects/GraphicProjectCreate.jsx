import Axios from 'axios';
import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const GraphicProjectCreate = ({ currentAdmin, setUpdated }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const _handleProjectCreate = (data, e) => {
        axios.post('/api/v1/graphic_projects', {
            data,
            // headers: {'Authorization': 'bearer ' + currentAdmin.attributes.token}
        })
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
            <form onSubmit={handleSubmit(_handleProjectCreate)}>
                <input type='text' name='title' placeholder='Title' ref={register} />
                <input type='text' name='description' placeholder='Description' ref={register} />
                <input type='text' name='image_path' placeholder='Image Path' ref={register} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default GraphicProjectCreate