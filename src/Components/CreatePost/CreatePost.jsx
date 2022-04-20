import React, { useState } from 'react';


const CreatePost = (prop) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.PreventDefault();
        let newEntry ={
                name: name,
                post: post

        }
        console.log(NewEntry)
        PaymentResponse.addNewEntryProperty(newEntry)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type='text' value={name} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit'>Create</button>
        </form>

    );

}

export default CreatePost;