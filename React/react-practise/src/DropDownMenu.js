import { useState } from "react";



export default function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggelMenu = () =>{
        setIsOpen((currentIsOpen)=>!currentIsOpen)
    }


    return(
        <div>
            <button onClick={toggelMenu}>Actions</button>
            {
                isOpen?
                <ul>
                    <li>edit</li>
                    <li>Remove</li>
                    <li>Archive</li>
                </ul>
                :null
            }
        </div>
    );


}