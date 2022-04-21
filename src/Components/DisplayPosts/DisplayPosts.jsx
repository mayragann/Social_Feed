import ToggleButtons from "../ToggleButtons/ToggleButtons"
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
            <>
            <tr>
                <td>{entry.name}</td>
            </tr>
            <tr>  
                <td>{entry.post}</td>
            </tr>
            <tr>   

                <ToggleButtons />
            </tr>
           
            </>
            );
          })}
        </tbody>
      </table>

    );
}

export default DisplayPost; 