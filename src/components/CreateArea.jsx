import React, { useState } from "react";

function CreateArea(props) {
    const [note,setNote] = useState({title:"",content:""});

    function changer(event){
        const {name,value} = event.target;
        setNote((prev)=>{
            return {...prev,[name]:value}
        })
    }
    function sendNote(event){
        props.createNote(note.title,note.content);
        setNote({title:"",content:""});
        event.preventDefault();
    }
  return (
    <div>
      <form onSubmit={sendNote}>
        <input onChange={changer} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={changer} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
