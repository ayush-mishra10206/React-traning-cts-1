
import React from 'react';

 const EnhancedComponent = (OriginalComponent) =>{
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent name="React training"/>
        }
    }
    return NewComponent;
}


export default EnhancedComponent;
