import React, {Component} from "react";
import './App.css'
import TitleBar from "../TitleBar/TitleBar";
import Bookviewer from "./BookViewer/Bookviewer";

class App extends Component{
    constructor(props){
        super(props);

        this.books = [
            {title : 'The Expanse', author: "James S.A Corey"},
            {title : "Can't Hurt Me", author: "David Goggins"},
            {title : 'Ready Player One', author: "Ernest Cline"},
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
                <Bookviewer books = {this.books[this.state.bookNumber]} nextBook = {this.goToNextBook} previousBook = {this.goToPreviousBook}/>
            </div>
                
                

                
        )
    }
}


export default App;
