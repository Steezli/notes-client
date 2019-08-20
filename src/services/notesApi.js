const createNote = (title, body) => {
  return fetch('http://localhost:7889/api/v1/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
    .then(res => {
      if(!res.ok) throw 'Could not save note';
      return res.json();
    });
};

export default createNote;
