import React, { usesState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {
  const [entries, setEntries] = useState([{name:'Richard Phillips', post: "This is great..."}, {name:'Stacey Williams', post: "Check it out"},])

  function addNewEntry(entry){
    let tempEntries = [ ...entries, entry]
    setEntries(tempEntries);
  }
  return (
    <div>
      <h3>Hello World</h3>
      <div>
        <CreatePost parentEntries={entries}/>
      </div>
    </div>
  );
}

export default App;
