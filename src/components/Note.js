import React from "react";
import "./Note.css";

class Note extends React.Component {
  viewNoteHandler = () => {
    let noteID = this.props.noteID;
    this.props.viewNote(noteID);
  };

  render() {
    return (
      <div className="note-container" onClick={this.viewNoteHandler}>
        <p className="note">{this.props.title}</p>
      </div>
    );
  }
}

export default Note;
