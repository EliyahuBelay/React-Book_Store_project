import React from "react";
import {GenreNameContex} from '../../MyContex/GenreNameContex/GenreNameContex';
class Country extends React.Component {
    render() {
        return (
            <div>
                <GenreNameContex.Consumer>
                    {(value) => <p>{value}</p>}
                </GenreNameContex.Consumer>
            </div>
        )
    }
}
export default Country;

//that component (Country) display the contex and in this time i cunsum the value
// with declaring a Consumer and getting the value(from the provider) thru arrow 
// function (the argument accord the field in the provider).