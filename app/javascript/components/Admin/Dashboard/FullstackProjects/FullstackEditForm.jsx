import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const FullstackEditForm = ({ currentFullstackProject, _handleProjectUpdate, setEditMode }) => {

    var project = currentFullstackProject.attributes
    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            title: project.title,
            description: project.description,
            image_path: project.image_path,
            id: currentFullstackProject.id
        }
    });



    return(
        <div>
            <form onSubmit={handleSubmit(_handleProjectUpdate)}>
                <label for='title'>Title</label>
                <input type='text' name='title' ref={register} />
                <label for='description'>Description</label>
                <input type='text' name='description' ref={register} />
                <label for='github_url'>GitHub URL</label>
                <input type='text' name='github_url' placeholder='GitHub URL' ref={register} />
                <label for='deploy_url'>Deployment URL</label>
                <input type='text' name='deploy_url' placeholder='Deployment URL' ref={register} />
                <label for='technology'>Technology</label>
                <input type='text' name='technology' placeholder='Technology' ref={register} />
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

export default FullstackEditForm;