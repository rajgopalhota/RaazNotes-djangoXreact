import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {BackendUrl} from './../Helper'
import axios from "axios";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/api/notes/`); // Replace with your backend URL
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setLoading(false);
      }
    };

    fetchNotes();
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
