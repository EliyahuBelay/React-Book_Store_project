import logo from './logo.svg';
import './App.css';
import Book from './Components/Book/Book';
import React from 'react';
import { GenreNameContex, GenreNameContexProvider } from './MyContex/GenreNameContex/GenreNameContex';//import the file that create contex object and function component  that return provider with props that represent the component that start the hierarchy.

function App() {
  return (
    //for declaring the path for the context object we 
    //על מנת להגדיר על התחלת ההיררכיה שבה יועבר הקונטקס אנו תוחמים תוחמים בעזרת הקונטקסט ומגדירים עליו כ Provider  
    //ונותנים לו ערך 
    <GenreNameContexProvider div = {<Book/>}>
      
    </GenreNameContexProvider>
     
      /* <div className="App">
        <header className="App-header">
          <Book bookName="Naruto" />
        </header>
      </div> */
    

  );

}

export default App;
