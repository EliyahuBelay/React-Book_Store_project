import React from 'react';
import Country from '../Country/Country';
import Genre from '../Genre/Genre';
import Song from '../Song/Song';

class Book extends React.Component{
    constructor(props){
        super(props)
        this.state = {writerName : ''};
        this.ChangeWriterName = this.ChangeWriterName.bind(this);
        this.ButtonRenderWriterName = this.ButtonRenderWriterName.bind(this);
    }
    ChangeWriterName(event){
        this.state.writerName = event.target.value;
    }
    ButtonRenderWriterName(){
        this.setState({writerName:this.state.writerName});
    }
    componentWillMount(){
        alert("welcom");
    }
    componentDidMount(){
        console.log("component mounting succeed");
    }
    componentWillUpdate(){
        alert("state will be chang now");
    }
    componentDidUpdate(){
        console.log("state change succeed");
    }
    render(){
        let{bookName} = this.props
        let{writerName} = this.state
        return(
            <div>
            <h1>{bookName}</h1>
            writer name : <input onChange={this.ChangeWriterName}/>
            <button onClick={this.ButtonRenderWriterName}>Go</button>
            <p>{writerName}</p>
            <Genre/>
            {/* display other component (Genre) in Book component */}

            <Country/>

            <Song/>
            </div>
        )
    }
}
export default Book;