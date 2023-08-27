import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/`) // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => setNote(data))
      .catch((error) => console.error("Error fetching note:", error));
  }, [id]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Posted At: {note.created_at}</p>
    </div>
  );
}

export default NoteDetail;
