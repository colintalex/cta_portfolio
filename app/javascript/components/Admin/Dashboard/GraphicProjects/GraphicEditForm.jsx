import React, { Fragment } from 'react'
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
                <label for='title'>Title</label>
                <input type='text' name='title' ref={register} />
                <label for='description'>Description</label>
                <input type='text' name='description' ref={register} />
                <button>Add Photos</button>
                <br/>Select images to delete<br/>
                {
                    project.images.map(img => {
                        return(
                            <Fragment>
                                <label for={img.id}>
                                    <img src={img.url} key={img.id} height='150' width='150' />
                                    {img.id}
                                </label>
                                <input type='checkbox' id={img.id} value={img.id} name='images' ref={register}/>
                            </Fragment>
                        )
                    })
                }
                <input type='hidden' name='id' ref={register} />
                <button type='submit'>Submit</button>
                <button type='submit' onClick={e=> setEditMode(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default GraphicEditForm;