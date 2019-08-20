import React, { PureComponent } from 'react';
import NoteForm from '../components/NoteForm';
import createNote from '../services/notesApi';

export default class CreateNote extends PureComponent {
  state = {
    title: '',
    body: ''
  };

  handleTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  }

  handleBodyChange = ({ target }) => {
    this.setState({ body: target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    createNote(title, body)
      .then(note => console.log(note, 'note'));
  }

  render() {
    const { title, body } = this.state;
    return <NoteForm 
      title={title}
      body={body}
      handleBodyChange={this.handleBodyChange}
      handleTitleChange={this.handleTitleChange}
      handleSubmit={this.handleSubmit}
    />;
  }
}
