import React from 'react'
import { useForm } from 'react-hook-form'

const CodeEditForm = ({ currentCodeProject, _handleProjectUpdate, setEditMode }) => {

    var project = currentCodeProject.attributes
    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            title: project.title,
            description: project.description,
            github_url: project.github_url,
            deploy_url: project.deploy_url,
            image_path: project.image_path,
            technology: project.technology,
            id: currentCodeProject.id
        }
    });



    return(
        <div>
            <form onSubmit={handleSubmit(_handleProjectUpdate)}>
                <input type='text' name='title' ref={register} />
                <input type='text' name='description' ref={register} />
                <input type='text' name='github_url' ref={register} />
                <input type='text' name='deploy_url' ref={register} />
                <input type='text' name='image_path' ref={register} />
                <input type='text' name='technology' ref={register} />
                <input type='hidden' name='id' ref={register} />
                <button type='submit'>Submit</button>
                <button type='submit' onClick={e=> setEditMode(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default CodeEditForm;