import './App.css';
import './darkmode.css';
import Home from './components/Home';
import NoteDetail from './components/NoteDetail';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnotes" element={<NotesForm />} />
        <Route path="/allnotes" element={<NotesList />} />
        <Route path="/detailednote/:id" element={<NoteDetail />} />
      </Routes>

    </>
  );
}

export default App;
