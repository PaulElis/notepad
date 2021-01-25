import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NotepadTitle from "./components/NotepadTitle.jsx";
import CreateNote from "./components/CreateNote.jsx";
import NotesList from "./components/NotesList.jsx";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.github.com/users/paulelis/gists"
      );
      setNotes(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <NotepadTitle />
      <CreateNote />
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
