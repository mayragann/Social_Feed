import React, { useState } from 'react';


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
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit'>Create</button>
        </form>

    );

}

export default CreatePost;