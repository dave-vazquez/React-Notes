import React from "react";
import "./NoteList.css";
import Note from "./Note";

class NoteList extends React.Component {
  render() {
    return (
      <div className="note-list-container">
        {this.props.notes.map(note => {
          return (
            <Note
              key={note.id}
              title={note.title}
              noteID={note.id}
              viewNote={this.props.viewNote}
            />
          );
        })}
      </div>
    );
  }
}

export default NoteList;
