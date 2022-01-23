import React from "react";
import {GenreNameContex} from '../../MyContex/GenreNameContex/GenreNameContex';// import Context object from App conponent
class Genre extends React.Component{
    render(){
        return(
            // console.log(GenreNameContex)
            <p>{GenreNameContex._currentValue}</p>//display the vlue of the context
        )
    }
}

export default Genre;