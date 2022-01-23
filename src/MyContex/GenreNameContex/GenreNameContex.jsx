import React from "react";

export const GenreNameContex = React.createContext('');// creating a Contex object and saving it in variable


export function GenreNameContexProvider(props) {
    return (
        <GenreNameContex.Provider value='Anime'>
            <div className="App">
                <header className="App-header">
                    {props.div}
                    {/* <Book bookName="Naruto" /> */}
                </header>
            </div>
        </GenreNameContex.Provider>
    )

}


