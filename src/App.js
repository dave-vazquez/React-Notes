import React from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteView from "./components/NoteView";

const notes = [
  {
    id: 0,
    title: "Lorem Ipsum",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda aliquam temporibus sint sit dolorum quae vero saepe, fuga vel facere ea!\n\nTemporibus facere blanditiis perferendis suscipit? Amet necessitatibus dolorem ducimus a, maiores vitae. A nisi nihil quia ad dolore recusandae!\n\nOdio eaque possimus omnis vero quis facere quibusdam ipsum."
  }
];

const defaultState = {
  notes: notes,
  currentNote: notes[0],
  title: undefined,
  text: undefined
};

class App extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, {...note}]
    });
  };

  viewNote = noteID => {
    this.setState({
      currentNote: this.state.notes.filter(note => note.id === noteID)[0]
    });
  };

  deleteNote = noteID => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteID)
    })
  }

  render() {
    return (
      <div className="app-container">
        <NoteList notes={this.state.notes} viewNote={this.viewNote} />
        <NoteView currentNote={this.state.currentNote} deleteNote={this.deleteNote}/>
        <NoteForm addNote={this.addNote} />
      </div>
    );
  }
}

export default App;
