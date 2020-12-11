import React from 'react'
import { useForm } from 'react-hook-form'

const GraphicEditForm = ({ currentGraphicProject, _handleProjectUpdate, setEditMode }) => {

    var project = currentGraphicProject.attributes
    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            title: project.title,
            description: project.description,
            image_path: project.image_path,
            id: currentGraphicProject.id
        }
    });



    return(
        <div>
            <form onSubmit={handleSubmit(_handleProjectUpdate)}>
                <input type='text' name='title' ref={register} />
                <input type='text' name='description' ref={register} />
                <input type='text' name='image_path' ref={register} />
                <input type='hidden' name='id' ref={register} />
                <button type='submit'>Submit</button>
                <button type='submit' onClick={e=> setEditMode(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default GraphicEditForm;