import React from 'react';

function NotesList({ notes }) {
  return (
    <div className="container">
      <h2 className="mt-4">All Notes</h2>
      <ul className="list-group">
        {notes.map((note, index) => (
          <li key={index} className="list-group-item">
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
