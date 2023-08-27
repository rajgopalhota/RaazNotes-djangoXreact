// Home.js

import React, { useState, useEffect } from "react";
import { BackendUrl } from "./../Helper";
import axios from "axios";

function Home() {
  const [ideas, setIdeas] = useState("");
  const [tags, setTags] = useState("");
  const [posts, setPosts] = useState([]);

  const handleAddPost = async () => {
    try {
      await axios.post(`${BackendUrl}/api/posts/create/`, {
        headers: {
          "Content-Type": "application/json",
        },
        ideas: ideas,
        tags: tags,
      });

      // Clear form inputs after successful submission
      setIdeas("");
      setTags("");
      fetchPosts(); // Refresh posts
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/api/posts/`);
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="add-post-section mt-4">
        <h3>Add Post</h3>
        <div className="mb-3">
          <label htmlFor="ideas" className="form-label">
            Ideas
          </label>
          <textarea
            className="form-control"
            id="ideas"
            rows="3"
            value={ideas}
            onChange={(e) => setIdeas(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddPost}>
          Add Post
        </button>
      </div>

      <div className="new-posts-section mt-4">
        <h3>New Posts</h3>
        {posts.map((post, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">Post {index + 1}</h5>
              <p className="card-text">
                <strong>Ideas:</strong> {post.ideas}
              </p>
              <p className="card-text">
                <strong>Tags:</strong> {post.tags}
              </p>
              <p className="card-text">
                <strong>Posted at:</strong>{" "}
                {new Date(post.created_at).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
