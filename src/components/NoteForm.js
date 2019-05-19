import React from "react";
import "./NoteForm.css";

const defaultState = {
	title: "",
	text: ""
};

class NoteForm extends React.Component {
  constructor(props) {
		super(props);

		this.state = defaultState;
	}

	changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
	}
	
	submitNote = event => {
		event.preventDefault();

		let newNote = {
			id: Date.now(),
			title: this.state.title,
			text: this.state.text
		};

		this.setState(defaultState);

		this.props.addNote(newNote);
	}

	render() {
		return (
			<div className="note-form-container">
				<form onSubmit={this.submitNote} name="addNoteForm" className="note-form">
					<input
						className="title-input"
						type="text"
						name="title"
						value={this.state.title}
						placeholder="Add Title"
						onChange={this.changeHandler}
					/>
					<textarea
						className="text-input" 
						name="text"
						placeholder="Add Text"
						value={this.state.text}
						onChange={this.changeHandler}
					/>
					<button className="add-button">+</button>
				</form>
		</div>
		);
	}
}

export default NoteForm;
