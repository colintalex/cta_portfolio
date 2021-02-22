import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const ApiEditForm = ({ currentApiProject, _handleProjectUpdate, setEditMode }) => {

    const project = currentApiProject.attributes;

    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            title: project.title,
            description: project.description,
            github_url: project.github_url,
            deploy_url: project.deploy_url,
            images: project.images,
            technology: project.technology,
            challenges: project.challenges,
            id: currentApiProject.id
        }
    });

    return(
        <div>
            <form onSubmit={handleSubmit(_handleProjectUpdate)}>
                <label for='title'>Title</label>
                <input type='text' name='title' ref={register} />
                <label for='description'>Description</label>
                <input type='text' name='description' ref={register} />
                <label for='github_url'>GitHub</label>
                <input type='text' name='github_url' ref={register} />
                <label for='deploy_url'>Deployment</label>
                <input type='text' name='deploy_url' ref={register} />
                <label for='technology'>Technology</label>
                <input type='text' name='technology' ref={register} />
                <label for='challenges'>Challenges</label>
                <input type='text' name='challenges' ref={register} />
                <br/>Select images to delete<br/>

                {
                    project.images.map(img => {
                        return(
                            <Fragment>
                                <label for={img.id}>
                                    <img src={img.url} key={img.id} height='150' width='150' />
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

export default ApiEditForm;