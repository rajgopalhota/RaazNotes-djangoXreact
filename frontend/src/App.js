import './App.css';
import './darkmode.css';
import Home from './components/Home';
import NoteDetail from './components/NoteDetail';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  const [notes, setNotes] = useState(['raja', 'pooja']);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnotes" element={<NotesForm />} />
        <Route path="/allnotes" element={<NotesList notes={notes} />} />
        <Route path="/detailednote" element={<NoteDetail />} />
      </Routes>

    </>
  );
}

export default App;
