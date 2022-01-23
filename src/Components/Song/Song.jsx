import React, { useContext } from "react";
import {GenreNameContex} from '../../MyContex/GenreNameContex/GenreNameContex';

function Song(){
    let Genre  = useContext(GenreNameContex)//using hook useContex and provide to the Contex object that i declare in App 
    return(
        <p>{Genre}</p>
    )
}
export default Song;