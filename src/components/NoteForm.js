import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ title, body, handleBodyChange, handleTitleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="Title your note?" onChange={handleTitleChange} />
      <input type="text" value={body} placeholder="Give your note details?" onChange={handleBodyChange} />
      <button onClick={handleSubmit}>its a button</button>
    </form>
  );
}

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBodyChange: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired
};

export default NoteForm;
