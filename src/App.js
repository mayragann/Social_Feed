import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const [posts, setPosts] = useState([{name:'Richard Phillips', post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}, {name:'Stacey Williams', post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}])
  
  function addNewEntry(entry){
    let tempPosts = [ entry, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <div>
        <NavBar />
        <CreatePost addNewEntryProperty={addNewEntry}/>
        <DisplayPosts parentPosts={posts} />
      </div>
    </div>
  );
}

export default App;
