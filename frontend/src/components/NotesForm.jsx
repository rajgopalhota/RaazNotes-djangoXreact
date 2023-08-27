import React, { useState } from "react";

function NotesForm() {
  const [title, setTitle] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [tags, setTags] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    const newNote = {
      title,
      cover_url: coverUrl,
      tags,
      text,
    };

    try {
      await fetch("http://127.0.0.1:8000/api/notes/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      // Clear form inputs after successful submission
      setTitle("");
      setCoverUrl("");
      setTags("");
      setText(""); // Refresh posts
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="container mt-5 p-3 border rounded">
      <h2>Add a New Note</h2>
      <div className="mb-3">
        <label className="form-label">Title:</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Cover URL:</label>
        <input
          type="text"
          className="form-control"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Tags:</label>
        <input
          type="text"
          className="form-control"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Text:</label>
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default NotesForm;
