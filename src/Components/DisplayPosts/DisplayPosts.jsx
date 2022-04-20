
const DisplayPost  = (props) => {
    return (  
        <table>
        <thead>
        <tr>
        </tr>
        </thead>
        <tbody>
        {props.parentPosts.map((entry) =>{
            return (
            <div>
            <tr>
                <td>{entry.name}</td>
            </tr>
            <tr>  
                <td>{entry.post}</td>
            </tr>
            <tr>   
                <button>Like</button>
                <button>Dislike</button>
            </tr>
           
            </div>
            );
          })}
        </tbody>
      </table>

    );
}

export default DisplayPost; 