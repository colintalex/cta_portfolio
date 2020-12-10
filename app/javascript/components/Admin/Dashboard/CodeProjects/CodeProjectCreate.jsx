import React from 'react'
import { useForm } from 'react-hook-form'

const CodeProjectCreate = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const _handleProjectCreate = (data) => {
        debugger
    }

    return (
        <div>
            Create a new code project here
            <form onSubmit={handleSubmit(_handleProjectCreate)}>
                <input type='text' name='title' placeholder='Title' ref={register} />
                <input type='text' name='description' placeholder='Description' ref={register} />
                <input type='text' name='github_url' placeholder='GitHub URL' ref={register} />
                <input type='text' name='deploy_url' placeholder='Deployment URL' ref={register} />
                <input type='text' name='image_path' placeholder='Image Path' ref={register} />
                <input type='text' name='technology' placeholder='Technology' ref={register} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default CodeProjectCreate