import React, { useState } from 'react';
import "./CreatePost.css"


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newEntry ={
                name: name,
                post: post

        }
        console.log(newEntry)
        props.addNewEntryProperty(newEntry)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label className='name-label'>Name</label>
                <input className='name-input' type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='post-content'>
                <label className='post-label'>Post</label>
                <textarea className='post-input' rows='10' cols="10" value={post} onChange={(event) => setPost(event.target.value)}/>
                <button className='submit-button' type='submit'>Create</button>
            </div>
        </form>

    );

}

export default CreatePost;