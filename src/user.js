// function User (props){
//     return(
//         <div>
//             <h1>Name:{props.name}</h1>
//             <h1>Age:{props.age}</h1>
//             <h1>Place:{props.place}</h1>
//         </div>
//     )
// }

import React from "react"
class User extends React.component {
    render(){
        return(
             <div>
                        <h1>Name:{this.props.name}</h1>
                         <h1>Age:{this.props.age}</h1>
                        <h1>Place:{this.props.place}</h1>
                    </div> 
        )
    }
}

export default User;