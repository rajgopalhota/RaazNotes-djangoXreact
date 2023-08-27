import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {BackendUrl} from './../Helper'
import axios from "axios";


function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `${BackendUrl}/api/notes/${id}/`
        ); // Replace with your backend URL
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
    <div>
      <h1>Welcome</h1>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Posted At: {note.created_at}</p>
    </div>
  );
}

export default NoteDetail;
