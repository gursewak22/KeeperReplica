import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Create from "./Create";

function App() {
  const [ notes , setNotes] = useState([]);
  function addNote(note){
    setNotes(
      prevNotes => {
        return [...prevNotes, note];
      }
    )

  }
  function deleteNote(id){
    setNotes(prevNotes =>{
     return prevNotes.filter((items ,index ) => {
        return index !==  id ; 
      })
    })
  
  }

  return (
    <div>
     
      <Header />
      <Create onAdd = {addNote}/>
      {notes.map((entry , index ) =>{
        return <Note
            key = {index}
            id = {index}
           title = {entry.title} 
           content = {entry.content}
            onDelete = {deleteNote}
           />
      })}
      <Footer />
    </div>
  );
}

export default App;
