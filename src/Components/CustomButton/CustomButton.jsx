import React, { Component } from 'react';
import "./CustomButton.css"

export class ToggleButtons extends  Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render (){
        return(
            <div>
                <button className='btn btn-primary'>like</button>
                <button className='btn btn-secondary'>dislike</button>
            </div>
        )
    }
}

export default  ToggleButtons;
// const CustomButton = (props) => {
//     const[buttonClass, setButtonClass] = useState('inactive');


//     function handleClick(){

//         if(buttonClass === "inactive"){
//             setButtonClass('active-dislike');
//         }
//         else{
//             setButtonClass("inactive");
//         }
//     }
//         return(
//             <div>
//                 <button className={buttonClass} onClick={handleClick}>{props.message}</button>
//             </div>
//         )
//     }

// export default  CustomButton;