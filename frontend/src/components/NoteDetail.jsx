import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackendUrl } from "./../Helper";
import axios from "axios";

function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/api/notes/${id}/`); // Replace with your backend URL
        setNote(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Note Details</h1>
          <h2 className="card-subtitle mb-2">{note.title}</h2>
          <p className="card-text">{note.content}</p>
          <p className="card-text">Posted At: {note.created_at}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteDetail;
