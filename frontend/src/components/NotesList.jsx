import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/notes/") // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/detailednote/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
