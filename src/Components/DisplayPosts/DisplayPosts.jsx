import CustomButton from "../CustomButton/CustomButton"; 
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
                <button>Like</button>
                <CustomButton message="Dislike!"/>
            </tr>
           
            </>
            );
          })}
        </tbody>
      </table>

    );
}

export default DisplayPost; 