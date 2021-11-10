import React, {Component} from "react";
import './App.css'
import TitleBar from "../TitleBar/TitleBar";


class App extends Component{
    constructor(props){
        super(props);

        this.books = [
            {title: "The Expanse", author: "James S.A Corey"},
            {title: "Can't Hurt Me", author: "David Goggins"},
            {title: "Ready Player One", author: "Ernest Cline"},
        ];

        this.state = {
            bookNumber: 0
        };
    }


    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber
        tempBookNumber ++;
        if ( tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState ({
            bookNumber: tempBookNumber
        });

        

    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber -- ;
        if (tempBookNumber < 0){
            tempBookNumber = this.books.length -1;
        }

        this.setState ({
            bookNumber: tempBookNumber
        });
        
        
    }



    render(){
        return(
           
           
           <div className = "container-fluid">
                <TitleBar/> 
                <div className = "row">
                                
                                <div className = "col-md-4">
                                    
                                    <button onClick = {this.goToPreviousBook}>Previous Book</button>
                                    
                                </div> {/* Button here to move to the previous book. */}

                                <div className = "col-md-4"> 
                                    
                                    <h1>{this.books[this.state.bookNumber].title}</h1>
                                    <h4>{this.books[this.state.bookNumber].author}</h4>
                                                             
                                </div> {/*Display book cover here. */}
                                   


                                <div className = "col-md-4">
                                    
                                    <button onClick = {this.goToNextBook}>Next Book</button>

                                </div> {/* Button here to move to the next book. */}
    
               
                </div>
           
                
                

            </div>
        )
    }
}


export default App;
