import React from "react";
import "./NoteView.css";

class NoteView extends React.Component {

	deleteNoteHandler = () => {
		let noteID = this.props.currentNote.id;

		this.props.deleteNote(noteID);
	}

  render() {
    return (
      <div className="note-view-container">
				<div className="note-view">
					<h1 className="note-header">{this.props.currentNote.title}</h1>
					<div className="note-text-container">
						<p className="note-text">{this.props.currentNote.text}</p>
					</div>
					<button className="delete-button" onClick={this.deleteNoteHandler}>-</button>
				</div>
      </div>
    );
  }
}

export default NoteView;
