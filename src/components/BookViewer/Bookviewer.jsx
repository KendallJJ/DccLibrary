import React from "react";
import Book from "../Book/Book";
const BookViewer = (props) => {
    return ( <div className = "row row-spacer">
                                
    <div className = "col-md-4">
        
        <button onClick = {props.previousBook}>Previous Book</button>
        
    </div> {/* Button here to move to the previous book. */}

    <div className = "col-md-4"> 
        
       <Book book= {props.books}/>
                                 
    </div> {/*Display book cover here. */}
       


    <div className = "col-md-4">
        
        <button onClick = {props.nextBook}>Next Book</button>

    </div> {/* Button here to move to the next book. */}


</div> );
}
 
export default BookViewer ;