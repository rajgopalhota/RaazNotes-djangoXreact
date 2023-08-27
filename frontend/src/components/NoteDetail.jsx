import React from 'react';

function NoteDetail({ note }) {
  return (
    <div className="container">
      <h2 className="mt-4">Note Detail</h2>
      <p className="lead">{note}</p>
    </div>
  );
}

export default NoteDetail;
