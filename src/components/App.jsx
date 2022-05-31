import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes,setNotes] = useState([]);

    function createNote(title,content){
        setNotes((prev)=>{
            return [...prev,{title:title,content:content}]
        })
    }
    function deleteNote(id){
        console.log(id);
        setNotes((prev)=>{
            return prev.filter((note,index)=>{return id!==index});
        })
    }
    return (
        <div>
            <Header></Header>
            <CreateArea createNote={createNote}/>
            {notes.map((note,index)=>{
                return <Note key={index} id={index} note={note} deleteNote={deleteNote}></Note>
            })}
            <Footer></Footer>
        </div>
    )
}

export default App