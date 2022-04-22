import ToggleButtons from "../ToggleButtons/ToggleButtons"
import "./DisplayPost.css"

const DisplayPost  = (props) => {
    return (  
        <table className="display-table">
        <thead>
        <tr>
        </tr>
        </thead>
        <tbody>
        {props.parentPosts.map((entry) =>{
            return (
            <>
            <tr className="top">
                <td className="name">{entry.name}</td>
            </tr>
            <tr >  
                <td className="post">{entry.post}</td>
            </tr>
            <tr className="top-border">   
                <ToggleButtons />
            </tr>
           <tr className="divider"></tr>
            </>
            );
          })}
        </tbody>
      </table>

    );
}

export default DisplayPost; 